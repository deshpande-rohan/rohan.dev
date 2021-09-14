import React from "react";
import {
  FormContainer,
  FormWrapper,
  SimpleForm,
  Label,
  Input,
  TextArea,
  Submit,
} from "./FormElements";
import emailjs from "emailjs-com";

const Form = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_furey2d",
        "template_ziwzehk",
        e.target,
        "user_EAZvA4GDbLPmFv93uTMcu"
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <FormContainer>
      <FormWrapper>
        <SimpleForm onSubmit={sendEmail}>
          <div>
            <Label htmlFor="name">Your Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              size="60"
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              required
            />
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <TextArea
              id="message"
              rows="5"
              name="message"
              cols="32"
              placeholder="Enter Your Message"
            ></TextArea>
          </div>
          <Submit>Let's Talk !</Submit>
        </SimpleForm>
      </FormWrapper>
    </FormContainer>
  );
};

export default Form;
