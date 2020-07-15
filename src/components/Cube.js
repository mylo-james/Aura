import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const Scene = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -60;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  /* border: 1px grey solid; */

  .cube {
    width: 100%;
    max-width: 500px;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(-100px);
    transition: transform 1s;
  }

  .cube__face {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: lightblue;
    border: 3px solid #dfdfdf;
  }

  .cube__face--feed {
    transform: rotateY(0deg) translateZ(100px);
  }
  .cube__face--stats {
    transform: rotateY(90deg) translateZ(100px);
  }
  .cube__face--blogs {
    transform: rotateY(180deg) translateZ(100px);
  }
  .cube__face--account {
    transform: rotateY(-90deg) translateZ(100px);
  }
  .cube.show-feed {
    transform: translateZ(-100px) rotateY(0deg);
  }
  .cube.show-stats {
    transform: translateZ(-100px) rotateY(-90deg);
  }
  .cube.show-blogs {
    transform: translateZ(-100px) rotateY(-180deg);
  }
  .cube.show-account {
    transform: translateZ(-100px) rotateY(-270deg);
  }
`;

const Cube = (props) => {
  const [side] = useState("feed");

  const cube = useRef();
  useEffect(() => {
    cube.current.classList = `cube show-${side}`;
  }, [side]);

  return (
    <>
      <Scene>
        <div ref={cube} style={props.boxStyle} className="cube show-feed">
          <div className="cube__face cube__face--feed">
            <div className="content"></div>
          </div>
          <div className="cube__face cube__face--stats">Stats</div>
          <div className="cube__face cube__face--blogs">Blogs</div>
          <div className="cube__face cube__face--account">Account</div>
        </div>
      </Scene>
    </>
  );
};

export default Cube;
