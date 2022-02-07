
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./content.css";
import { useMediaQuery } from "react-responsive";
import { Col, Container, Row } from 'react-bootstrap';
import smarter from '../../images/content/smarter.png'
import signup from '../../images/content/signup.png'
import offers from '../../images/content/offers.png'




const column = (img, header, content) => {
    return (
        <Col className="content">
            <img src={img} className="content-icon" /><br />
            <span className="Sign-up-for-free">
                {header}<br />
            </span>
            <span className="Signing-up-and-setti">
                {content}
            </span>

        </Col>
    );
}

const row = (img, header, content) => {
    return (
        <Row className="content">
            <img src={img} className="content-icon" /><br />
            <Col style={{marginLeft:"10px"}}>
                <span className="Sign-up-for-free">
                    {header}<br />
                </span>
                <span className="Signing-up-and-setti">
                    {content}
                </span>
            </Col>
        </Row>
    );
}

const Content = () => {

    const isMobile = useMediaQuery({ query: "(max-device-width: 600px)" });

    return (
        <Container>
            {isMobile ?
                <Col className="main-container">
                    {row(signup, 'Sign up for free', "Signing up and setting up your project takes less than 5 minutes")}
                    {row(smarter, 'Source smarter', " Our data-based AI & our experts will help you find what you are looking for")}
                    {row(offers, 'Receive offers', "With our insights you always receive high-quality proposals at the best price")}
                </Col> :

                <Row className="main-container">
                    {column(signup, 'Sign up for free', "Signing up and setting up your project takes less than 5 minutes")}
                    {column(smarter, 'Source smarter', " Our data-based AI & our experts will help you find what you are looking for")}
                    {column(offers, 'Receive offers', "With our insights you always receive high-quality proposals at the best price")}
                </Row>
            }
          
        </Container>
    )
}

export default Content;