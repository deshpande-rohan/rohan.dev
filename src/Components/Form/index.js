import React from 'react'
import { FormContainer, FormWrapper, SimpleForm, Label, Input, TextArea, Submit } from './FormElements';

const Form = () => {
    return (
        <FormContainer>
            <FormWrapper>
                <SimpleForm noValidate >
                    <div>
                        <Label htmlFor="name">Your Name</Label>
                        <Input type="text" id="name" autoComplete="off" size="60" required />
                    </div>
                    <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input type="email" id="email" autoComplete="off" required />
                    </div>
                    <div>
                        <Label htmlFor="message">Message</Label>
                        <TextArea id="message" rows="5" cols="32" placeholder="Enter Your Message"></TextArea>
                    </div>
                    <Submit>Let's Talk !</Submit>
                </SimpleForm>
            </FormWrapper>
        </FormContainer>
    )
}

export default Form
