import React, { useContext, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import chooseTheme from "../../Styles/Theme";
import styled from "styled-components";
import {
  ThemeContext,
  MoodContext,
  UserContext,
  CircleContext,
} from "../../context";
import Activities from "./Activities";

const LevelWrapper = styled.div`
  width: 70%;
  max-width: 500px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;

  .svgWrapper,
  & svg {
    width: 30vw;
    height: 30vw;
    max-height: 200px;
    max-width: 200px;
  }

  .buttons {
    width: 100%;
  }

  button {
    width: 80%;
    margin-bottom: 25px;
  }

  #mood {
    margin: 10px 0 25px 0;
    padding: 0;
  }
`;

const Level = (props) => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const { currentUserName } = useContext(UserContext);
  const { setCircleText } = useContext(CircleContext);
  const { mood, setMood } = useContext(MoodContext);
  const { setComp } = props;
  const { icon: Smile } = chooseTheme(currentTheme);

  const moodInput = useRef();
  const history = useHistory();

  useEffect(() => {
    setCircleText([
      `Nice to see you, ${currentUserName}.`,
      "How are you today?",
    ]);
  }, [currentUserName, setCircleText]);

  const handleUpdate = (e) => {
    setCurrentTheme(parseInt(e.target.value));
  };

  const handleContinue = () => {
    setMood({ ...mood, ...{ mood: moodInput.current.value } });
    setComp(<Activities setComp={setComp} />);
  };
  const handleBack = () => {
    setMood({
      mood: null,
      activites: [],
      title: "",
      content: "",
    });
    history.push("/");
  };

  return (
    <LevelWrapper>
      <Smile />

      <input
        ref={moodInput}
        id="mood"
        name="mood"
        type="range"
        onChange={handleUpdate}
        min="1"
        max="5"
        defaultValue="3"
      />
      <div className="buttons">
        <button onClick={handleContinue}>Continue</button>
        <button onClick={handleBack}>Cancel</button>
      </div>
    </LevelWrapper>
  );
};

export default Level;
