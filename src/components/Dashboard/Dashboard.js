import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Mood from "../Mood/Mood";
import Feed from "../Feed/Feed";
import Stats from "../Stats/Stats";
import Resources from "../Resources/Resources";
import Account from "../Account/Account";
import { Switch, Route } from "react-router-dom";

const DashboardWrapper = styled.div`
  position: relative;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Nav />
      <Switch>
        <Route path="/mood" component={Mood} />

        <Route path="/stats" component={Stats} />
        <Route path="/resources" component={Resources} />
        <Route path="/account" component={Account} />
        <Route path="/" component={Feed} />
      </Switch>
    </DashboardWrapper>
  );
};

export default Dashboard;
