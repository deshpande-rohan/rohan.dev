import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #101010;
  -webkit-tap-highlight-color: transparent;
`;

export const FormWrapper = styled.div`
  width: 420px;
  height: 480px;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 0.40379901960784315) 0%,
    rgba(148, 187, 233, 0.42620798319327735) 100%
  );
  border-radius: 6px;

  @media only screen and (max-width: 500px) {
    width: 340px;
    height: 460px;
  }
`;

export const Message = styled.p`
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  background: #b9d9eb;
  padding: 6px 20px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  position: absolute;
  top: 0%;
  right: 6%;
  white-space: nowrap;
  z-index: 5;

  & .cancel {
    font-size: 18px;
    color: #002d62;
    transform: translateY(4px);
    cursor: pointer;
    margin-left: 3px;
  }
`;

export const SimpleForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 24px 30px;
  position: relative;

  & > div {
    margin-bottom: 8px;
  }

  @media only screen and (max-width: 500px) {
    padding: 18px 24px;
  }
`;

export const Label = styled.label`
  display: inline-block;
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 8px;

  @media only screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: none;
  outline: none;
  background: rgba(255, 255, 255, 0.09);
  color: #fff;
  font-size: 16px;
  border-radius: 5px;
  transition: border-left 0.2s ease;

  &:focus {
    border-left: 2px solid red;
  }

  &:valid {
    border-left: 2px solid green;
  }

  @media only screen and (max-width: 500px) {
    padding: 8px 10px;
    font-size: 15px;
  }
`;

export const TextArea = styled.textarea`
  background: rgba(255, 255, 255, 0.09);
  border: none;
  outline: none;
  width: 100%;
  border-radius: 5px;
  padding: 12px 10px;
  color: #fff;
  font-size: 16px;

  ::placeholder {
    color: rgba(106, 207, 26, 0.85);
    letter-spacing: 1.01px;
    font-size: 16px;
  }
`;

export const Submit = styled.button`
  background-image: linear-gradient(
    to right,
    #f46b45 0%,
    #eea849 51%,
    #f46b45 100%
  );
  padding: 10px 20px;
  margin: 10px;
  text-align: center;
  text-transform: uppercase;
  background-size: 200% auto;
  color: #101010;
  border: none;
  outline: none;
  text-decoration: none;
  border-radius: 10px;
  font-size: 20px;
  font-weight: 500;
  display: block;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background-position: right center;
  }

  &:active {
    transform: scale(0.8);
  }
`;
