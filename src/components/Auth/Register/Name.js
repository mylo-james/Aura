import React, { useContext, useRef, useEffect } from "react";
import styled from "styled-components";

import { CircleContext } from "../../../context";

const NameWrapper = styled.div`
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
      <div>
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
      </div>
      <div>
        <button onClick={props.handleSubmit(input)}>Continue</button>
        <button>Try our Demo</button>
      </div>
    </NameWrapper>
  );
};

export default Name;
