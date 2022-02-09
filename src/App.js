import React from "react";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Form from "./components/form/form";
import MoreOptions from "./components/content/content";
import tablet_why_snubes from './images/content/tablet_why_snubes.png'
import desktop_why_snubes from './images/content/desktop_why_snubes.png'
import mobile_why_snubes from './images/content/mobile_why_snubes.png'

import styled from "styled-components";
import Brand2 from "./components/brand/brand2";
import Copyright from "./components/Copyright/copyright";


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


function App() {
    const isMobile = useMediaQuery({ query: "(max-device-width: 600px)" });
    return (
        <div className="App">
            <Navbar />
            <Form />
            <MoreOptions/>
            <WhySnubes
                desktopimg={desktop_why_snubes}
                tabletimg={tablet_why_snubes}
                mobileimg={mobile_why_snubes}
            />
         <Brand2/>
         <Copyright/>
               
        </div>
    );
}

export default App;