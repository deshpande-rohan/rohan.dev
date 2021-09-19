import React from "react";
import { MdCancel } from "react-icons/md";
import {
  FormContainer,
  FormWrapper,
  SimpleForm,
  Label,
  Input,
  TextArea,
  Submit,
  Message,
} from "./FormElements";
import emailjs from "emailjs-com";
import { useState } from "react";

const Form = () => {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

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
          setMessage("Message Sent");
          setVisible(true);
          e.target.reset();
        },
        (error) => {
          setMessage("Something went wrong !");
          setVisible(true);
          e.target.reset();
        }
      );
  };

  return (
    <FormContainer>
      <FormWrapper>
        <SimpleForm onSubmit={sendEmail}>
          {visible && (
            <Message>
              {message}{" "}
              <MdCancel className="cancel" onClick={() => setVisible(false)} />
            </Message>
          )}
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
              maxLength="140"
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
