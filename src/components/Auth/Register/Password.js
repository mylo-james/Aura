import React, { useContext, useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { UserContext, CircleContext } from "../../../context";
import { backendURL } from "../../../config";
import { toast } from "react-toastify";

const PasswordWrapper = styled.div`
  position: absolute;
  height: 40%;
  width: 70%;
  left: 15%;
  bottom: 125px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  & * {
    font-size: 0.8rem;
  }
  input {
    margin: 0;
    margin-bottom: 15px;
  }
`;

const Password = () => {
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const input = useRef();
  const {
    currentUserName,
    currentUserEmail,
    setCurrentUserId,
    setCurrentUserEmail,
    setCurrentUserName,
  } = useContext(UserContext);
  const { setCircleText } = useContext(CircleContext);
  const history = useHistory();

  useEffect(() => {
    input.current.focus();
    setCircleText([`Got it! Your email is:`, currentUserEmail]);
  }, [currentUserEmail, setCircleText]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name: currentUserName,
      email: currentUserEmail,
      password,
      confirmPassword,
    };

    const res = await fetch(`${backendURL}/session/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const { error } = await res.json();
      toast(error, { toastId: "passwordError" });
      return;
    }
    const { access_token, user } = await res.json();
    setCurrentUserId(user.id);
    setCurrentUserEmail(user.email);
    setCurrentUserName(user.name);
    localStorage.removeItem("aura_register");
    localStorage.setItem("aura_access_token", JSON.stringify(access_token));
    history.push("/mood");
  };

  const handleUpdate = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
      return;
    }
    if (e.target.id === "password") {
      setPassword(e.target.value);
    } else {
      setConfirmPassword(e.target.value);
    }
  };

  const handleBack = (e) => {
    e.preventDefault();
    setCurrentUserEmail(null);
    history.push("/auth/register");
  };

  return (
    <PasswordWrapper>
      <label htmlFor="password">Please set a password</label>
      <div style={{ width: "100%" }}>
        <input
          ref={input}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onKeyUp={handleUpdate}
        ></input>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="ConfirmPassword"
          onKeyUp={handleUpdate}
        ></input>
      </div>

      <button onClick={handleSubmit}>Continue</button>
      <button onClick={handleBack}>Go Back</button>
    </PasswordWrapper>
  );
};

export default Password;
