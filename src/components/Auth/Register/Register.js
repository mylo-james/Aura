import React, { useEffect, useContext } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { UserContext } from "../../../context";
import Name from "./Name";
import Email from "./Email";
import Password from "./Password";
import { Switch, Route, useLocation } from "react-router-dom";

const RegisterWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  margin: auto;

  .switch {
    position: absolute;
    width: 70%;
    bottom: 0px;
  }

  .user,
  .login {
    margin-bottom: 20px;
  }

  .login {
    font-family: raleway;
    font-weight: 900;
    color: white;
  }

  .button {
    margin-bottom: 30px;
  }
`;

const Register = (props) => {
  const {
    currentUserName,
    setCurrentUserName,
    currentUserEmail,
    setCurrentUserEmail,
  } = useContext(UserContext);

  useEffect(() => {
    if (!currentUserName) {
      return;
    } else if (!currentUserEmail) {
      props.history.push("/auth/register/email");
    } else {
      props.history.push("/auth/register/password");
    }
  }, [props.history, currentUserName, currentUserEmail]);

  const handleUpdate = (input) => (e) => {
    if (e.keyCode === 13) {
      handleSubmit(input);
    }
  };

  const handleSubmit = (input) => (e) => {
    e.preventDefault();

    const token = JSON.parse(localStorage.getItem("aura_register"));
    const key = input.current.id;
    const value = input.current.value;

    if (!value) {
      toast(`Please provide your ${key}`, { toastId: "customId" });
      return;
    }

    token[key] = value;

    localStorage.setItem("aura_register", JSON.stringify(token));

    if (key === "name") {
      setCurrentUserName(value);
    } else {
      setCurrentUserEmail(value);
    }

    props.history.push("/auth/register");
  };

  return (
    <RegisterWrapper>
      <form>
        <Switch>
          <Route
            exact
            path="/auth/register/email"
            render={() => (
              <Email handleUpdate={handleUpdate} handleSubmit={handleSubmit} />
            )}
          />
          <Route exact path="/auth/register/password" component={Password} />
          <Route
            path="/auth/register"
            render={() => (
              <Name handleUpdate={handleUpdate} handleSubmit={handleSubmit} />
            )}
          />
        </Switch>
      </form>

      <div className="switch">
        <p className="user">I already have an account</p>
        <div
          className="login"
          onClick={() => {
            props.history.push("/auth/login");
          }}
        >
          Login
        </div>
      </div>
    </RegisterWrapper>
  );
};

export default Register;
