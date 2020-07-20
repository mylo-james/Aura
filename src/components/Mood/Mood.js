import React, { useContext, useEffect, useState } from "react";
import Circle from "../Circle";
import Level from "./Level";
import { UserContext } from "../../context";
import styled from "styled-components";

const MoodWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: calc(70vh - 125px);
  margin-top: 5vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
`;

const Mood = (props) => {
  const { currentUserName } = useContext(UserContext);

  const [comp, setComp] = useState(null);

  useEffect(() => {
    
    setComp(<Level setComp={setComp} />);
  }, []);

  if (!currentUserName) return null;
  return (
    <MoodWrapper>
      <Circle />
      {comp}
    </MoodWrapper>
  );
};

export default Mood;
