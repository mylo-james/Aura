import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { MoodContext, UserContext, CircleContext } from "../../context";
import Level from "./Level";

const ActivityWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  justify-content: center;
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
    margin-bottom: 30px;
  }

  .activity {
    width: 70%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;

const Activity = (props) => {
  const { mood, setMood } = useContext(MoodContext);
  const { currentUserName } = useContext(UserContext);
  const { setCircleText } = useContext(CircleContext);
  const { setComp } = props;

  const moodInput = useRef();

  useEffect(() => {
    setCircleText([
      `Nice to see you, ${currentUserName}.`,
      "How are you today?",
    ]);
  }, [currentUserName, setCircleText]);

  const handleUpdate = (e) => {};

  const handleContinue = () => {
    setMood({ ...mood, ...{ mood: moodInput.current.value } });
    setComp();
  };
  const handleBack = () => {
    setMood({
      mood: null,
      activites: [],
      title: "",
      content: "",
    });
    setComp(<Level setComp={setComp} />);
  };

  return (
    <ActivityWrapper>
      <div className="activity">
        <button onClick={handleContinue}>Continue</button>
        <button onClick={handleBack}>Back</button>
      </div>
    </ActivityWrapper>
  );
};

export default Activity;
