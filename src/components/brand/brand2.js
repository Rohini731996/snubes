

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./brand.css";
import { useMediaQuery } from "react-responsive";
import { Col, Container, Row } from 'react-bootstrap';
import group40_2x from '../../images/content/group-40@2x.png'
import facebook from '../../images/content/facebook.png'
import twitter from '../../images/content/twitter.png'
import linkedin from '../../images/content/linkedin.png'
import internetSer from '../../images/content/InternetService.png'
import styled from "styled-components";
import Brand from "./brand";


const IsTabletOrDesktop = styled.div`
@media screen and (min-width: 1024px) {
    width: 120rem;
    height: 100rem;
    background-image: url(${props => props.desktopimg}); 
    background-repeat: no-repeat;
    background-size: contain;
}
   
    @media screen and (max-width: 1023px) {
    width: 48rem;
    height: 30rem;
    background-color: rgb(179, 46, 46);
    background-size: cover;
    background-image: url(${props => props.tabletimg}); 
    background-repeat: no-repeat;
    }
`;


const aboutUs = () => {
    return (
        <Container className="container-style">
            <Row>
                <Col>
                    <img src={internetSer}
                        className="img-style" />
                </Col>
                <Col className="col-style">
                    <h6 className="h6-style">About us</h6>
                    <h6 className="h6-style">Become a Partner</h6>
                    <h6 className="h6-style">FAQ</h6>
                </Col>
                <Col className="col-style">
                    <h6 className="h6-style">Imprint</h6>
                    <h6 className="h6-style">Terms & Conditions</h6>
                    <h6 className="h6-style">Privacy Policy</h6>

                </Col>
                <Col className="col-style">
                    <h6 className="h6-style">support@snubes.com</h6>
                    <h6 className="h6-style">+49 (0) 305 5645327</h6>
                    <Row style={{ margin: 0 }}>
                        <img src={facebook} className="social-img-style" />
                        <img src={twitter} className="social-img-style" />
                        <img src={linkedin} className="social-img-style" />
                    </Row>
                </Col>
            </Row>

        </Container>
    );
}

const Brand2 = () => {
    const isMobile = useMediaQuery({ query: "(max-device-width: 600px)" });
    return (

        <div>
            {isMobile ? <Brand /> :
                <div>
                    <IsTabletOrDesktop
                        desktopimg={group40_2x}
                        tabletimg={group40_2x}
                    />
                    {aboutUs()}
                </div>
            }

        </div>
    )
}

export default Brand2;