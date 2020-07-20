import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  RiFileCopy2Line,
  RiFileChartLine,
  RiBookReadLine,
  RiUser4Line,
  RiAddCircleLine,
} from "react-icons/ri";

const NavWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;

  .navIconWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
  }

  .navIcon {
    color: ${(props) => props.theme.primary};
  }

  .active {
    border-radius: 5px;
    background-color: ${(props) => props.theme.primary};
    color: white;
  }

  .active .navIcon {
    color: white;
  }

  .center .active {
    background-color: white;
  }
  .center .active .add {
    color: ${(props) => props.theme.primary};
  }

  .left,
  .right {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 0 2vw;
  }

  .left {
    padding-right: 7vw;
  }
  .right {
    padding-left: 7vw;
  }

  .add {
    margin: auto;
  }

  .center {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    bottom: 15px;
    left: calc(50% - 25px);
    background-color: ${(props) => props.theme.primary};
    border: white 4px solid;
    border-radius: 10px;
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <div className="center">
        <NavLink className="navIconWrapper" to="/mood">
          {<RiAddCircleLine className="add" />}
        </NavLink>
      </div>
      <div className="left">
        <NavLink className="navIconWrapper" exact to="/">
          {<RiFileCopy2Line className="navIcon" />}
        </NavLink>
        <NavLink className="navIconWrapper" to="/stats">
          {<RiFileChartLine className="navIcon" />}
        </NavLink>
      </div>
      <div className="right">
        <NavLink className="navIconWrapper" to="/resources">
          {<RiBookReadLine className="navIcon" />}
        </NavLink>
        <NavLink className="navIconWrapper" to="/account">
          {<RiUser4Line className="navIcon" />}
        </NavLink>
      </div>
    </NavWrapper>
  );
};

export default Nav;
