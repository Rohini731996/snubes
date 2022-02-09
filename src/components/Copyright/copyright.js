

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from 'react-bootstrap';

import "./copyright.css";

const Copyright = () => {
    return (

        <Container className="maincontainer-style">
            <span className="copyright-text">
                © 2019 Snubes GmbH All Rights Reserved.
            </span>
        </Container>

    )
}

export default Copyright;