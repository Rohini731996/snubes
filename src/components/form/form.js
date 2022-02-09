
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./form.css";
import { Container } from 'react-bootstrap';
import FormSubmission from "../FormSubmission/formSubmission";
import { useSelector } from 'react-redux'
import FormInput from '../FormInput/formInput'


const FormComponent = () => {

    const userdata = useSelector((state) => state.userData.payload);

    return (
        <Container className="form-container">
            {userdata?.Name ?
                <FormSubmission data={userdata} />
                :
                <FormInput />
            }
        </Container>
    )
}

export default FormComponent;