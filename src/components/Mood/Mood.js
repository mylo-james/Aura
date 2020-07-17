import React, { useContext, useEffect, useState } from "react";
import Circle from "../Circle";
import Level from "./Level";
import { UserContext, ThemeContext, CircleContext } from "../../context";
import styled from "styled-components";

import { Switch, Route } from "react-router-dom";

const MoodWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 40vh;
  margin: 350px auto 0 auto;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
`;

const Mood = (props) => {
  const { currentUserName } = useContext(UserContext);
  const { setCircleText } = useContext(CircleContext);

  const [comp, setComp] = useState(null);

  useEffect(() => {
    setCircleText([
      `Nice to see you, ${currentUserName}.`,
      "How are you today?",
    ]);
    setComp(<Level setComp={setComp} />);
  }, [currentUserName, setCircleText]);

  if (!currentUserName) return null;
  return (
    <MoodWrapper>
      <Circle />
      {comp}
      {/* <Switch>
        <Route exact path="/mood" render={() => <Level />} />
        <Route exact path="/mood/activity" render={() => "Hello"} />
        <Route exact path="/mood/journal" render={() => "Hello"} />
      </Switch> */}
    </MoodWrapper>
  );
};

export default Mood;
