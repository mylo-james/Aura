import React, { useRef, useEffect, useContext } from "react";
import { CircleContext } from "../../../context";
import styled from "styled-components";

const FormWrapper = styled.div`
  position: absolute;
  height: 40%;
  width: 70%;
  left: 15%;
  bottom: 125px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  & * {
    font-size: 0.8rem;
  }
  input {
    margin: 0;
    margin-bottom: 15px;
  }
`;

const Form = (props) => {
  const emailInput = useRef();
  const passwordInput = useRef();
  const { setCircleText } = useContext(CircleContext);

  useEffect(() => {
    emailInput.current.focus();
    setCircleText(["Nice to see you again!"]);
  }, [setCircleText]);
  return (
    <FormWrapper>
      <label htmlFor="email">Enter your email and password</label>
      <div style={{ width: "100%" }}>
        <input
          ref={emailInput}
          type="text"
          name="name"
          id="email"
          placeholder="Email"
          defaultValue="zachary.henderson114@gmail.com"
          onKeyUp={props.handleUpdate(emailInput, passwordInput)}
        ></input>
        <label style={{ display: "none" }} htmlFor="password">
          Please enter your password
        </label>
        <input
          ref={passwordInput}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          defaultValue="Test@1234"
          onKeyUp={props.handleUpdate(passwordInput)}
        ></input>
      </div>
      <button onClick={props.handleSubmit(emailInput, passwordInput)}>
        Continue
      </button>
      <button>Try our Demo</button>
    </FormWrapper>
  );
};

Form.propTypes = {};

export default Form;
