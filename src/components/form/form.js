
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.css";
import { useMediaQuery } from "react-responsive";
import { Form, Container, Button } from 'react-bootstrap';
import FormSubmission from "../FormSubmission/formSubmission";


const email_reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// const phone_reg = /^(\+\d{1,2})[4-9][0-9]{9}$/;
const phone_reg = /^[4-9][0-9]{9}$/;
const name_req = /^[\w_.]{1,50}$/;
const comp_req = /^[^0-9]{1,80}$/;

let error = [
    "Please check the input fields!",
    "Any characters except numbers in Company name",
    "Any characters in Name",
    "Only numbers allowed in Phone",
    "Email validates eg:@xyz.com, "
]


const FormInput = () => {

    const [company, setCompany] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [submit, setSubmit] = useState(false)
    const [data, setData] = useState(false)


    const onSubmit = () => {
        let details = {
            Company: company,
            Name: name,
            Phone: phone,
            Email: email
        }


        if (phone_reg.test(phone) &&
            comp_req.test(company) &&
            email_reg.test(email) &&
            name_req.test(name)) {
            setSubmit(true)
        } else {
            alert(error[0] + "\n \u2219" + error[1] + "\n \u2219" + error[2] + "\n \u2219" + error[3] + "\n \u2219" + error[4])

        }
        setData(details)
        setCompany('');
        setName('')
        setPhone('')
        setEmail('')
    }


    const isMobile = useMediaQuery({ query: "(max-device-width: 600px)" });
    return (
        <Container className="form-container">
            {submit ?
                <FormSubmission data={data} />
                :
                <Form className="form">
                    <h1 className="form-h1">
                        Find inbound call centers for your company <br></br>
                    </h1>
                    {!isMobile ? <h5 className="form-h5">
                        Use our AI and Big Data driven call center sourcing solution
                    </h5> : <></>}
                    <Form.Group className="form-group">
                        <Form.Label className="form-label">Company </Form.Label>
                        <Form.Control required type="text" placeholder="Company" value={company} onChange={e => setCompany(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="form-group">
                        <Form.Label className="form-label">Name</Form.Label>
                        <Form.Control required type="text" placeholder="Full name" value={name} onChange={e => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="form.Textarea" className="form-group">
                        <Form.Label className="form-label">Phone</Form.Label>
                        <Form.Control required type="text" placeholder="+91" value={phone} onChange={e => setPhone(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="form.Email" className="form-group">
                        <Form.Label className="form-label">Email address</Form.Label>
                        <Form.Control required type="email" placeholder="name@mail.com" value={email} onChange={e => setEmail(e.target.value)} />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button className="form-button" onClick={onSubmit}>Get informed</Button>
                    </div>
                </Form>
            }
        </Container>
    )
}

export default FormInput;