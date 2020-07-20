import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { UserContext, CircleContext } from "../../../context";
import { useHistory } from "react-router-dom";

const EmailWrapper = styled.div`
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
      <div>
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
      </div>
      <div>
        <button onClick={props.handleSubmit(input)}>Continue</button>
        <button onClick={handleBack}>Go Back</button>
      </div>
    </EmailWrapper>
  );
};

export default Email;
