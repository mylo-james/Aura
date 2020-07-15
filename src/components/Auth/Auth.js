import React, { useState, useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";
import { UserContext } from "../../context";
import { fadeInFromUp } from "../../Styles/animations";
import circle from "../../Images/circle.svg";
import Name from "./Name";
import Email from "./Email";
import Password from "./Password";

const rotate = keyframes`
    0% {
        transform: rotate(0deg) skewY(0deg) skewX(0deg);
    }

    10% {
      transform: rotate(36deg) skewY(5deg) skewX(0deg);
    }

    20% {
      transform: rotate(72deg) skewY(0deg) skewX(5deg);
    }
    30% {
      transform: rotate(108deg) skewY(-5deg) skewX(0deg);
    }
    40% {
      transform: rotate(144deg) skewY(0deg) skewX(-5deg);
    }

    50% {
      transform: rotate(180deg) skewY(5deg) skewX(0deg);
    }
    60% {
      transform: rotate(216deg) skewY(0deg) skewX(5deg);
    }
    70% {
      transform: rotate(256deg) skewY(-5deg) skewX(0deg);
    }
    80% {
      transform: rotate(288deg) skewY(0deg) skewX(-5deg);
    }
    90% {
      transform: rotate(324deg) skewY(5deg) skewX(0deg);
    }
    100% {

        transform: rotate(360deg) skewY(0deg) skewX(0deg);;

    }
`;

const AuthWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 80vh;
  margin: 5vh auto 10vh auto;

  & * {
    animation: ${fadeInFromUp} 0.5s forwards;
  }

  div {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
  }

  img {
    width: 50%;
    max-width: 350px;
    max-height: 25vh;
    margin-bottom: 10px;
    animation: ${rotate} 15s linear infinite;
  }

  input {
    width: 100%;
    background: none;
    border: none;
    border-bottom: #dfdfdf solid 1px;
    margin-top: 30px;
    height: 30px;
    font-size: 0.7rem;
  }
`;

const Auth = () => {
  const [next, setNext] = useState();

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
    if (!currentUserName) {
      setNext(<Name />);
      return;
    }
    if (!currentUserEmail) {
      setNext(<Email />);
      return;
    }
    setNext(<Password />);
  }, [currentUserName, currentUserEmail]);

  return (
    <AuthWrapper>
      <img alt="Aura Logo" src={circle} />
      {next}
    </AuthWrapper>
  );
};

export default Auth;
