

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useMediaQuery } from "react-responsive";
import { Col, Container, Row } from 'react-bootstrap';

import "./copyright.css";

import internetSer from '../../images/content/InternetService.png'



import styled from "styled-components";




const Branding2 = styled.div`
@media screen and (min-width: 1024px) {
    width: 120rem;
    height: 100rem;
    background-repeat: no-repeat;
    background-size: contain;
}
    @media screen and (max-width: 1023px) {
    width: 48rem;
    height: 30rem;
    background-color: rgb(179, 46, 46);
    background-size: cover;
    background-repeat: no-repeat;
    }
`;



const Copyright = () => {
    const isMobile = useMediaQuery({ query: "(max-device-width: 600px)" });
    return (

        <Container className="maincontainer-style">
            <span className="copyright-text">
                © 2019 Snubes GmbH All Rights Reserved.
            </span>
        </Container>

    )
}

export default Copyright;