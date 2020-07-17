import React from "react";
import styled from "styled-components";
import { backendURL } from "../../../config";

import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Form from "./Form";

const LoginWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 55vh;
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
`;

const Login = (props) => {
  const history = useHistory();

  const handleUpdate = (input1, input2) => (e) => {
    if (e.keyCode === 13) {
      handleSubmit(input1, input2);
      return;
    }
  };

  const handleSubmit = (input1, input2) => async (e) => {
    e.preventDefault();
    const body = {
      email: input1.current.value,
      password: input2.current.value,
    };
    const res = await fetch(`${backendURL}/session/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const { error } = await res.json();
      toast.error(error);
      return;
    }

    const { access_token } = await res.json();

    localStorage.setItem("aura_access_token", JSON.stringify(access_token));
    history.replace("/mood");
  };

  return (
    <LoginWrapper>
      <form>
        <Form handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
      </form>

      <div className="switch">
        <p className="user">I'd like to make an account</p>
        <div
          className="login"
          onClick={() => {
            props.history.push("/auth/register");
          }}
        >
          Register
        </div>
      </div>
    </LoginWrapper>
  );
};

export default Login;
