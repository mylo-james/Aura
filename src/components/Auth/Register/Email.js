import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { UserContext, CircleContext } from "../../../context";
import { useHistory } from "react-router-dom";

const EmailWrapper = styled.div`
  position: absolute;
  height: 70%;
  width: 70%;
  left: 15%;
  top: 0px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  & * {
    font-size: 0.8rem;
  }
`;

const Email = (props) => {
  const input = useRef();
  const history = useHistory();
  const { currentUserName, setCurrentUserName } = useContext(UserContext);
  const { setCircleText } = useContext(CircleContext);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("aura_register"));
    if (token && "email" in token && token.email !== null) {
      input.current.defaultValue = token.email;
    }

    setCircleText([`Nice to meet you, ${currentUserName}`]);
  }, [currentUserName, setCircleText]);

  const handleBack = (e) => {
    e.preventDefault();
    setCurrentUserName(null);
    history.push("/auth/register");
  };

  return (
    <EmailWrapper>
      <label htmlFor="email">What's your email address?</label>
      <input
        ref={input}
        autoFocus
        type="text"
        name="email"
        id="email"
        placeholder="My email address is..."
        onKeyUp={props.handleUpdate(input)}
      ></input>

      <button onClick={props.handleSubmit(input)}>Continue</button>
      <button onClick={handleBack}>Go Back</button>
    </EmailWrapper>
  );
};

export default Email;
