import React, { useContext, useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { UserContext } from "../../context";
import { backendURL } from "../../config";
import { toast } from "react-toastify";

const PasswordWrapper = styled.div`
  height: 70%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  button {
    width: 70%;
    margin-bottom: 20px;
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
    padding: 10% 30px;
    border-radius: 5px;
    background-color: #7e57c2;
  }
  .buttons {
    width: 100%;
  }
  .question *,
  .question *::placeholder {
    color: white;
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
  const history = useHistory();

  useEffect(() => {
    input.current.focus();
  }, []);

  const handleSubmit = async () => {
    const body = {
      name: currentUserName,
      email: currentUserEmail,
      password,
      confirmPassword,
    };

    const res = await fetch(`${backendURL}/session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const { error } = await res.json();
      toast.error(error);
      return;
    }
    const { access_token, user } = await res.json();
    setCurrentUserId(user.id);
    setCurrentUserEmail(user.email);
    setCurrentUserName(user.name);
    localStorage.removeItem("aura_register");
    localStorage.setItem("aura_access_token", access_token);
    history.push("/");
  };

  const handleUpdate = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
      return;
    }
    if (e.target.id === "password") {
      setPassword(e.target.value);
    } else {
      setConfirmPassword(e.target.value);
    }
  };
  const handleBack = (e) => {
    setCurrentUserEmail("");
    localStorage.setItem(
      "aura_register",
      JSON.stringify({ name: currentUserName, email: "" })
    );
    history.goBack();
  };

  return (
    <PasswordWrapper>
      <div>
        <div>{`Got it!`}</div>
        <div>{currentUserEmail}</div>
      </div>

      <div className="question">
        <div>Please set a password</div>
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
      <div className="buttons">
        <button onClick={handleSubmit}>Continue</button>
        <button onClick={handleBack}>Go Back</button>
      </div>
    </PasswordWrapper>
  );
};

export default Password;
