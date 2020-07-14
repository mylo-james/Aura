import React, { useContext, useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import sun from "../../Images/sun.svg";
import { UserContext } from "../../context";
import { backendURL } from "../../config";
import { toast } from "react-toastify";

const Password = () => {
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const { currentUserName, currentUserEmail } = useContext(UserContext);
  const history = useHistory();

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
    const { access_token } = await res.json();
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

  return (
    <>
      <div className="logoWrapper">
        <img alt="sun" src={sun} />
        <svg viewBox="0 0 240 80">
          å
          <text x="77" y="50">
            Aura
          </text>
        </svg>
        <h2>Welcome to Aura,</h2>
        <h2>Your Daily Mood Journal.</h2>
      </div>
      <div>
        <h3>Please set a password?</h3>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Password"
          onKeyUp={handleUpdate}
        ></input>
        <input
          type="text"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="ConfirmPassword"
          onKeyUp={handleUpdate}
        ></input>
      </div>
      <p>I already have an account</p>
      <Link to={"/auth/register"}>Login</Link>
      <button onClick={handleSubmit}>Continue</button>
    </>
  );
};

export default Password;
