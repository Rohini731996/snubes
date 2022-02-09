import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Form from "./components/form/form";
import MoreOptions from "./components/content/content";
import tablet_why_snubes from './images/content/tablet_why_snubes.png'
import desktop_why_snubes from './images/content/desktop_why_snubes.png'
import mobile_why_snubes from './images/content/mobile_why_snubes.png'
import { setUserLocationAction } from "./actions/formAction";
import styled from "styled-components";
import Brand2 from "./components/brand/brand2";
import Copyright from "./components/Copyright/copyright";
import JSONContent from "./countries.json"

const WhySnubes = styled.div`
    width: 120rem;
    height: 37.5rem;
    background-image: url(${props => props.desktopimg}); no-repeat;
    background-size: cover;
    @media screen and (max-width: 1023px) {
    width: 48rem;
    height: 38.5rem;
    background-image: url(${props => props.tabletimg}); no-repeat;
    }
    @media screen and (max-width: 640px) {
    width: 20rem;
    height: 38.87rem;
    background-image: url(${props => props.mobileimg}); no-repeat;
    }
`;


const countries = JSONContent;

function App() {

const dispatch = useDispatch()

    const getGeoInfo = () => {
        fetch('http://ip-api.com/json')
            .then(res => res.json())
            .then(response => {
                console.log("Country: ", response.country);
                countries.map((country)=>{
                    if(country.name ===  response.country) {
                        dispatch(setUserLocationAction(country.dial_code))
                    }
                })
             
            })
            .catch((error) => {
                console.log('Request failed',error);
            });
    };

    useEffect(() => {
        getGeoInfo()
    }, [])

    return (
        <div className="App">
            <Navbar />
            <Form />
            <MoreOptions />
            <WhySnubes
                desktopimg={desktop_why_snubes}
                tabletimg={tablet_why_snubes}
                mobileimg={mobile_why_snubes}
            />
            <Brand2 />
            <Copyright />

        </div>
    );
}

export default App;