
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./brand.css";
import { useMediaQuery } from "react-responsive";
import { Col, Container, Row } from 'react-bootstrap';

import group_15 from '../../images/group-15.png'
import talixo_logo from '../../images/talixo-logo@3x.png'
import about_us from '../../images/content/about_us.png'
import brands from '../../images/content/brands.png'


const Brand = () => {

    return (
        <Container className="Rectangle-Copy-9">
            <Col>
                <Row className="row-style">
                    <img src={talixo_logo} className="talixo_logo_black-copy-5" />
                </Row>
                <Row>
                    <span className="Finding-a-suitable">
                        “Finding a suitable outsourcing service provider through Snubes was very easy and our personal consultant helped us every step of the way. After a short time we had good offers on the table. An on-site visit confirmed the positive impression and we have now found a matching partner. Thank you for your great support, which has helped us a lot in the selection process.”
                    </span>
                </Row>
                <Row className="row-style">
                    <img src={group_15}
                        className="Group-15"/>
                </Row>
                <Row>
                    <img src={brands}
                        style={{ marginTop: "3rem", padding:"0px" }}
                    />
                </Row>
                <Row>
                    <img src={about_us}
                        style={{ marginTop: "3rem", padding:"0px" }}
                    />
                </Row>

            </Col>

        </Container>
    )
}

export default Brand;