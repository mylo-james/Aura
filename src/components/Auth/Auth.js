import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../context";
import { fadeInFromUp } from "../../Styles/animations";
import Circle from "../Circle";
import Register from "./Register/Register";
import Login from "./Login/Login";
import { Route, Switch } from "react-router-dom";

const AuthWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 85vh;
  margin: 3vh auto 10vh auto;

  button {
    width: 80%;
  }
  .user,
  button {
    font-size: 0.7rem;
  }
  div {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
  }
`;

const Auth = (props) => {
  const { setCurrentUserName, setCurrentUserEmail } = useContext(UserContext);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("aura_register"));
    if (token) {
      setCurrentUserName(token.name);
      setCurrentUserEmail(token.email);
    } else {
      localStorage.setItem(
        "aura_register",
        JSON.stringify({ name: null, email: null })
      );
    }
    props.history.push("/auth/register");
  }, [setCurrentUserName, setCurrentUserEmail]);

  return (
    <AuthWrapper>
      <Circle />
      <Switch>
        <Route path="/auth/register" component={Register} />
        <Route path="/auth/login" component={Login} />
      </Switch>
    </AuthWrapper>
  );
};

export default Auth;
