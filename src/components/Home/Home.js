import React from "react";
import styled from "styled-components";
import Cube from "../Cube";

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Cube />
    </HomeWrapper>
  );
};

export default Home;
