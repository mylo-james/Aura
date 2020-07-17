import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";

import { CircleContext } from "../../../context";

const NameWrapper = styled.div`
  position: absolute;
  height: 50%;
  width: 70%;
  left: 15%;
  top: 30px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  & * {
    font-size: 0.8rem;
  }
`;

const Name = (props) => {
  const input = useRef();
  const { setCircleText } = useContext(CircleContext);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("aura_register"));

    if (token && "name" in token && token.name !== null) {
      input.current.defaultValue = token.name;
    }
    setCircleText(["Welcome to Aura,", "Your Daily Mood Journal."]);
  }, [setCircleText]);

  return (
    <NameWrapper>
      <label htmlFor="name">What do your friends call you?</label>

      <input
        ref={input}
        autoFocus
        type="text"
        name="name"
        id="name"
        placeholder="My friends call me..."
        onKeyUp={props.handleUpdate(input)}
        // onFocus={moveCursor}
      ></input>

      <button onClick={props.handleSubmit(input)}>Continue</button>
      <button>Try our Demo</button>
    </NameWrapper>
  );
};

export default Name;
