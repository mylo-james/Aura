import React, { useContext, useEffect, useState } from "react";
import Circle from "../Circle";
import { UserContext, ThemeContext, CircleContext } from "../../context";
import styled from "styled-components";
import chooseTheme from "../../Styles/Theme";
import { Switch, Route } from "react-router-dom";

const MoodWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;

  .svgWrapper,
  & svg {
    margin: 0;
    height: 200px;
    width: 200px;
  }
`;

const Mood = (props) => {
  const { currentUserName } = useContext(UserContext);
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  const { setCircleText } = useContext(CircleContext);
  const { icon: Smile } = chooseTheme(currentTheme);
  const [response, setResponse] = useState({
    mood: null,
    activites: [],
    title: "",
    content: "",
  });

  useEffect(() => {
    setCircleText([
      `Nice to see you, ${currentUserName}.`,
      "How are you today?",
    ]);
  }, [currentUserName, setCircleText]);

  const handleUpdate = (e) => {
    setCurrentTheme(parseInt(e.target.value));
  };

  if (!currentTheme || !currentUserName) return null;
  return (
    <MoodWrapper>
      <Circle />
      <div className="svgWrapper">
        <Smile />
      </div>
      <Switch>
        <Route
          exact
          path="/mood"
          render={() => (
            <div
              style={{
                width: "70%",
                display: "flex",
                flexFlow: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <input
                id="mood"
                name="mood"
                type="range"
                onChange={handleUpdate}
                min="1"
                max="5"
                defaultValue="3"
              />
              <button style={{ width: "80%" }}>Continue</button>
            </div>
          )}
        />
        <Route exact path="/mood/journal" render={() => "Hello"} />
      </Switch>
    </MoodWrapper>
  );
};

export default Mood;
