import React from "react";
import styled from "styled-components";
import { setColor } from "../../Styles";
import { BoxWrapper } from "./Box";
import { Link } from "react-router-dom";

const LevelBox = ({ item, index }) => {
  return (
    <Link to='/home' style={{ textDecoration: "none" }}>
      <LevelBoxWrapper as='button'>
        <div>
          Level
          <span className='span'>{index}</span>
        </div>
        <div>
          <span className='span'>{item}</span> Cards
        </div>
      </LevelBoxWrapper>
    </Link>
  );
};

const LevelBoxWrapper = styled(BoxWrapper)`
  width: 80vw;
  height: 10vh;
  margin: 0 5vh 0.5vw 5vh;
  font-size: xx-large;
  display: flex;
  justify-content: space-around;

  .span {
    color: ${setColor.mainWhite};
  }
  &:hover {
    background: ${setColor.mainGreen};
    cursor: grab;
  }
`;

export default LevelBox;
