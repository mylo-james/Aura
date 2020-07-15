import React, { useState, useEffect, useRef } from "react";
import { backendURL } from "../../config";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Login = (props) => {
  const emailInput = useRef();
  const passwordInput = useRef();
  const nameQuestion = useRef();
  const history = useHistory();
  const [email, setEmail] = useState("zachary.henderson114@gmail.com");
  const [password, setPassword] = useState("Test@1234");

  useEffect(() => {
    emailInput.current.focus();
  }, []);

  const handleUpdate = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
      return;
    }
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    const body = {
      email,
      password,
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
    history.replace("/");
  };

  return (
    <>
      <div ref={nameQuestion} className="slideInFromRight question card">
        <div>Nice to see you again.</div>
        <input
          ref={emailInput}
          type="text"
          name="name"
          id="email"
          placeholder="Email"
          onKeyUp={handleUpdate}
        ></input>
        <input
          ref={passwordInput}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onKeyUp={handleUpdate}
        ></input>
      </div>
      <button onClick={handleSubmit}>Continue</button>
      <div>
        <p className="user switch">I'd like to make an account</p>
        <button
          className="user"
          onClick={() => {
            props.setLogin(false);
          }}
        >
          Register
        </button>
      </div>
    </>
  );
};

export default Login;
