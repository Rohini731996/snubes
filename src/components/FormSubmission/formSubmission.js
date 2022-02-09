import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./formsubmission.css";
import { useMediaQuery } from "react-responsive";
import { Form, Container, Button, Row, Col } from 'react-bootstrap';



const _row = (key, value,index) => {
    return <Row key={index} className="row-style">
        <Col xs={2} >{key}</Col>
        <Col md={5} className="value">{value}</Col>
    </Row>
}

const FormSubmission = ({ data }) => {

    const isMobile = useMediaQuery({ query: "(max-device-width: 425px)" });
    return (
        <Container className="confirm-container" >
            <Form className="form">
                <span className="Thank-you-for-your" >
                    Thank you for your request!
                </span><br />
                <p className="Youve-taken-the" >
                    You’ ve taken the first step. Our experts will get in touch with you soon.
                </p>
                <div className="horizontal-line"> </div>

                {isMobile ?
                    <Col>

                        {Object.entries(data).map((item,index) => {
                            return <Row key={index}>
                                <span>{item[0]}</span>
                                <span className="value">{item[1]}</span>
                            </Row>
                        })}
                    </Col> :
                    <Container>
                        {Object.entries(data).map((item,index) => {
                            return _row(item[0], item[1],index)
                        })}
                    </Container>
                }
            </Form>
        </Container>
    )
}

export default FormSubmission;