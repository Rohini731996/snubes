import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./confirmation.css";
import { useMediaQuery } from "react-responsive";
import { Form, Container, Button, Row, Col } from 'react-bootstrap';





const Confirmation = () => {

    const isMobile = useMediaQuery({ query: "(max-device-width: 600px)" });

    return (
    <Container fluid className="confirm-container" >
         <Form className="form">
        <p className="Thank-you-for-your" >
            Thank you for your request!
        </p><br />
        <p className="Youve-taken-the" >
            You’ ve taken the first step.Our experts will get in touch with you soon. 
            </p>
        <div className="horizontal-line"> </div>
        <Col>
            <Row>
                <span className="key" >
                    Company
                </span>
                <span className="value" >
                    Rohi
                </span>
            </Row>
            < Row >
                <span className="key" >
                    Name
                </span>
                <span className="value" >
                    Rohi
                </span>
            </Row>
            <Row>
                <span className="key" >
                    Phone
                </span>
                <span className="value" >
                    Rohi
                </span>
            </Row>
            <Row>
                <span className="key">
                    Email
                </span>
                <span className="value" >
                    Rohi
                </span>
            </Row>
        </Col>
        </Form>
    </Container>


    )

    // return <Container className="form-container">

    //     <Form className="form">
    //         <span className="Thank-you-for-your">
    //             Thank you for your request! <br />
    //         </span>
    //         <span className="Youve-taken-the">
    //             You’ve taken the first step. Our experts will get in touch with you soon.
    //         </span>

    //         <div className="horizontal-line"></div>
    //         <Form.Group className="form-group">
    //             <Form.Label className="label">Company </Form.Label>
    //             <Form.Text>
    //                 ROhini test
    //             </Form.Text>
    //         </Form.Group>
    //         <Form.Group className="form-group">
    //             <Form.Label className="label">Name</Form.Label>
    //             <Form.Text>
    //                 ROhini test
    //             </Form.Text>
    //         </Form.Group>
    //         <Form.Group controlId="form.Textarea" className="form-group">
    //             <Form.Label className="label">Phone</Form.Label>
    //             <Form.Text>
    //                 ROhini test
    //             </Form.Text>
    //         </Form.Group>
    //         <Form.Group controlId="form.Email" className="form-group">
    //             <Form.Label className="label">Email address</Form.Label>
    //             <Form.Text>
    //                 ROhini test
    //             </Form.Text>
    //         </Form.Group>
    //     </Form>
    // </Container>
}

export default Confirmation;