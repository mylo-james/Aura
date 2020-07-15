import React, { useState, useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { UserContext } from "../../context";
import Name from "./Name";
import Email from "./Email";
import Password from "./Password";

const rotate = keyframes`
    0% {
        transform: rotate(0deg)
    }

    100% {

        transform: rotate(360deg)

    }
`;

const AuthWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 614px;
  height: 90vh;
  margin: 5vh auto;

  & * {
    width: 80%;
  }

  svg {
    width: 50%;
    font: 40px Delius;
    fill: #262626;
    text-align: center;
    margin-bottom: 60px;
  }
  .logoWrapper, div {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
  }

  img {
    width: 40%;
    max-width: 400px;
    animation: ${rotate} 20s linear infinite;
  }

  h2,
  p {
    
    padding-bottom: 10px;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    margin-top: 20px;
  }

  input {
    width: 100%;
    background: none;
    border: none;
    border-bottom: #dfdfdf solid 1px;
    margin-top: 30px;
    height: 50px;
    font-size: 20;
  }
`;

const Auth = () => {
  const [next, setNext] = useState();
  const [input, setInput] = useState("test");
  const {
    currentUserName,
    setCurrentUserName,
    currentUserEmail,
    setCurrentUserEmail,
  } = useContext(UserContext);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("aura_register"));
    if (token) {
      setCurrentUserName(token.name);
      setCurrentUserEmail(token.email);
    } else {
      localStorage.setItem(
        "aura_register",
        JSON.stringify({
          name: null,
          email: null,
        })
      );
    }
  }, [setCurrentUserName, setCurrentUserEmail]);

  useEffect(() => {
    renderNext();
  }, [currentUserName, currentUserEmail]);

  const renderNext = () => {
    console.log(currentUserName, currentUserEmail);
    if (!currentUserName) {
      setNext(<Name />);
      return;
    }
    if (!currentUserEmail) {
      setNext(<Email />);
      return;
    }
    setNext(<Password />);
  };
  return <AuthWrapper>{next}</AuthWrapper>;
};

export default Auth;
