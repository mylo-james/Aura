import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../context";
import Circle from "../Circle";
import Register from "./Register/Register";
import Login from "./Login/Login";
import { Route, Switch } from "react-router-dom";

const AuthWrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(65vh - 25px);
  max-width: 500px;
  margin: 0 auto 5vh auto;

  button {
    width: 80%;
  }
  .user,
  button {
    font-size: 0.7rem;
  }
`;

const Auth = (props) => {
  const { setCurrentUserName, setCurrentUserEmail } = useContext(UserContext);

  useEffect(() => {
    console.log("auth");
    const token = JSON.parse(localStorage.getItem("aura_register"));
    if (token) {
      setCurrentUserName(token.name);
      setCurrentUserEmail(token.email);
    } else {
      localStorage.setItem(
        "aura_register",
        JSON.stringify({ name: null, email: null })
      );
      props.history.push("/auth/register");
    }
  }, [props.history, setCurrentUserName, setCurrentUserEmail]);

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
