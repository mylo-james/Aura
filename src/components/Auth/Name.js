import React, { useContext, useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import Login from "./Login";


import { UserContext } from "../../context";

const NameWrapper = styled.div`
  height: 70%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  @keyframes slideInFromRight {
    from {
      transform: translateX(25%) rotateY(270deg);
    }
    to {
      transform: translateX(0%) rotateY(360deg);
    }
  }
  @keyframes slideOutToLeft {
    from {
      transform: translateX(0%) rotateY(0deg);
    }
    to {
      transform: translateX(-25%) rotateY(90deg);
    }
  }

  button {
    width: 70%;
  }
  a {
    font-size: 0.8rem;
    color: #7e57c2;
  }
  .switch {
    width: 100%;
    font-size: 0.6rem;
    margin-bottom: 20px;
  }

  .question {
    width: 70%;
    animation-duration: 0.25s;
    animation-fill-mode: forwards;
  }

  .question *,
  .question *::placeholder {
    color: white;
  }
`;

const Name = () => {
  const input = useRef();
  const nameQuestion = useRef();
  const [name, setName] = useState(null);
  const [login, setLogin] = useState(false);
  const { setCurrentUserName, setCurrentUserEmail } = useContext(UserContext);

  useEffect(() => {
    input.current.focus();
  }, []);

  const handleSubmit = (e) => {
    if (!name) {
      toast("Please provide a name");
      return;
    }
    const token = JSON.parse(localStorage.getItem("aura_register"));
    localStorage.setItem(
      "aura_register",
      JSON.stringify({ ...token, name: input.current.value })
    );

    setCurrentUserName(name);
    setCurrentUserEmail(
      JSON.parse(localStorage.getItem("aura_register")).email
    );
  };
  const handleUpdate = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
      return;
    }
    setName(input.current.value);
  };
  return (
    <NameWrapper>
      <div>
        <div>Welcome to Aura,</div>
        <div>Your Daily Mood Journal.</div>
      </div>
      {login ? (
        <Login setLogin={setLogin} />
      ) : (
        <>
          <div ref={nameQuestion} className="slideInFromRight question card">
            <div>What do your friends call you?</div>
            <input
              ref={input}
              type="text"
              name="name"
              id="name"
              placeholder="My friends call me..."
              onKeyUp={handleUpdate}
            ></input>
          </div>
          <button onClick={handleSubmit}>Continue</button>
          <div>
            <p className="user switch">I already have an account</p>
            <button
              className="user"
              onClick={() => {
                setLogin(true);
              }}
            >
             
              Login
            </button>
          </div>
        </>
      )}
    </NameWrapper>
  );
};

export default Name;
