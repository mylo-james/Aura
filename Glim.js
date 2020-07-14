import React from "react";
import styled, { keyframes } from "styled-components";

const glimmer = keyframes`
    0% {
        transform: rotateZ(-45deg) translateY(-35%) rotate(300deg)
    }

    100% {

        transform: rotateZ(-45deg) translateY(-35%) rotate(250deg)

    }
`;

const GlimWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .glim {
    overflow: hidden;
    height: 100%;
    width: 100%;
    border-top-left-radius: 50%;
    border-top-right-radius: 5%;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    transform: rotate(-45deg) translateX(-7%) translateY(7%);
    /* box-shadow: 25px -25px 90px 85px white; */
    z-index: -1;
  }

  .outer {
    position: absolute;
    /* box-shadow: 0 0 90vw 60vw orange; */
    z-index: -2;
  }

  .eye {
    position: absolute;
    background-color: #262626;
    height: 12%;
    width: 12%;
    top: 40%;
    border-radius: 20px;
  }

  .leftEye {
    left: 30%;
  }

  .rightEye {
    right: 30%;
  }

  .mouth {
    position: absolute;
    background-color: #262626;
    height: 15%;
    width: 20%;
    top: 55%;

    border-bottom-left-radius: 70px;
    border-top-left-radius: 50%;
    border-bottom-right-radius: 70px;
    border-top-right-radius: 50%;
  }

  .inner {
    height: 200%;
    width: 200%;
    border-radius: 50%;
    margin: 0;
    background: radial-gradient(circle at 50% 150%, yellow, orange 70%);
    animation: ${glimmer} 0.2s linear alternate infinite;
  }
`;

const Glim = (props) => {
  return (
    <GlimWrapper style={{ width: props.width, height: props.width }}>
      <div className="glim">
        <div className="inner"></div>
      </div>
      <div className="outer"></div>
      <div className="eye leftEye"></div>
      <div className="eye rightEye"></div>
      <div className="mouth"></div>
    </GlimWrapper>
  );
};

export default Glim;
