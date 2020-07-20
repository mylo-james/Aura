import React, { useRef, useEffect, useContext } from "react";
import { CircleContext } from "../../../context";
import styled from "styled-components";

const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-evenly;

  & * {
    font-size: 0.8rem;
  }

  & div {
    width: 100%;
  }

  button {
    margin-bottom: 30px;
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
      <div>
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
      </div>
      <div>
        <button onClick={props.handleSubmit(emailInput, passwordInput)}>
          Continue
        </button>
        <button>Try our Demo</button>
      </div>
    </FormWrapper>
  );
};

Form.propTypes = {};

export default Form;
