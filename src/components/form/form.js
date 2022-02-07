
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.css";
import { useMediaQuery } from "react-responsive";
import { Form, Container, Button } from 'react-bootstrap';





const FormInput = () => {

    const isMobile = useMediaQuery({ query: "(max-device-width: 600px)" });

    const [company, setCompany] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')


    const onSubmit = () => {
        let details={
            company:company,
            name:name,
            phone:phone,
            email
        }


        console.log("details-----",details)
        setCompany('');
        setName('')
        setPhone('')
        setEmail('')
    }



    return (
        <Container className="form-container">

            <Form className="form">
                <h1 className="form-h1">
                    Find inbound call centers for your company <br></br>
                </h1>
                {!isMobile ? <h5 className="form-h5">
                    Use our AI and Big Data driven call center sourcing solution
                </h5> : <></>}
                <Form.Group className="form-group">
                    <Form.Label className="form-label">Company </Form.Label>
                    <Form.Control type="text" placeholder="Company" value={company} onChange={e => setCompany(e.target.value)} />
                </Form.Group>
                <Form.Group className="form-group">
                    <Form.Label className="form-label">Name</Form.Label>
                    <Form.Control type="text" placeholder="Full name" value={name} onChange={e => setName(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="form.Textarea" className="form-group">
                    <Form.Label className="form-label">Phone</Form.Label>
                    <Form.Control type="text" placeholder="+91" value={phone} onChange={e => setPhone(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="form.Email" className="form-group">
                    <Form.Label className="form-label">Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@mail.com" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button className="form-button" onClick={onSubmit}>Get informed</Button>
                </div>
            </Form>
        </Container>
    )
}

export default FormInput;