import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import chooseTheme from "../../Styles/Theme";
import styled from "styled-components";
import { ThemeContext, MoodContext } from "../../context";
import Activities from "./Activities";

const LevelWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  .svgWrapper,
  & svg {
    width: 60vw;
    height: 60vw;
    max-height: 200px;
    max-width: 200px;
  }

  button {
    width: 80%;
  }

  .moodSetter {
    width: 70%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;

const Level = (props) => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const { mood, setMood } = useContext(MoodContext);
  const { icon: Smile } = chooseTheme(currentTheme);

  const moodInput = useRef();
  const history = useHistory();
  const handleUpdate = (e) => {
    setCurrentTheme(parseInt(e.target.value));
  };

  const handleContinue = () => {
    const { setComp } = props;
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
      <div className="moodSetter">
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
        <button onClick={handleContinue}>Continue</button>
        <button onClick={handleBack}>Back</button>
      </div>
    </LevelWrapper>
  );
};

export default Level;
