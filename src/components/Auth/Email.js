import React, { useContext, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context";
import { slideInFromRight } from "../../Styles/animations";

const EmailWrapper = styled.div`
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
    animation-name: ${slideInFromRight};
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }
  .buttons {
    width: 100%;
  }
  .question *,
  .question *::placeholder {
    color: white;
  }
`;

const Email = () => {
  const history = useHistory();
  const input = useRef();
  const [email, setEmail] = useState(null);
  const {
    setCurrentUserName,
    currentUserName,
    setCurrentUserEmail,
  } = useContext(UserContext);

  useEffect(() => {
    input.current.focus();
  }, []);

  const handleUpdate = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
      return;
    }
    setEmail(input.current.value);
  };

  const handleSubmit = (e) => {
    if (!email) {
      toast("Please provide an email");
      return;
    }
    const token = JSON.parse(localStorage.getItem("aura_register"));
    localStorage.setItem(
      "aura_register",
      JSON.stringify({ ...token, email: input.current.value })
    );
    setCurrentUserEmail(email);
    setCurrentUserName(JSON.parse(localStorage.getItem("aura_register")).name);
  };

  const handleBack = (e) => {
    setCurrentUserName("");
    localStorage.setItem(
      "aura_register",
      JSON.stringify({ name: "", email: "" })
    );
    setEmail("");
    history.goBack();
  };
  return (
    <EmailWrapper>
      <div>{`Nice to meet you, ${currentUserName}`}</div>

      <div className="question card">
        <div>What's your email?</div>
        <input
          ref={input}
          type="email"
          name="email"
          id="email"
          placeholder="My email is..."
          onKeyUp={handleUpdate}
        ></input>
      </div>
      <div className="buttons">
        <button onClick={handleSubmit}>Continue</button>
        <button onClick={handleBack}>Go Back</button>
      </div>
    </EmailWrapper>
  );
};

export default Email;
