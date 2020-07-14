import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import sun from "../../Images/sun.svg";
import { UserContext } from "../../context";

const Email = () => {
  const input = useRef();
  const [email, setEmail] = useState(null);
  const { setCurrentUserEmail } = useContext(UserContext);

  const handleSubmit = (e) => {
    const token = JSON.parse(localStorage.getItem("aura_register"));
    localStorage.setItem(
      "aura_register",
      JSON.stringify({ ...token, email: input.current.value })
    );
    setCurrentUserEmail(email);
  };
  const handleUpdate = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
      return;
    }
    setEmail(input.current.value);
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
        <h3>What's your email?</h3>
        <input
          ref={input}
          type="text"
          name="email"
          id="email"
          placeholder="My email is..."
          onKeyUp={handleUpdate}
        ></input>
      </div>
      <p>I already have an account</p>
      <Link to={"/auth/register"}>Login</Link>
      <button onClick={handleSubmit}>Continue</button>
    </>
  );
};

export default Email;
