import React from "react";
import { SectionWrapper } from "./Gameboard";
import styled, { keyframes } from "styled-components";
import LevelBox from "./LevelBox";
import { setColor, setTransition } from "../../Styles";
const Levelboard = () => {
  const levelArr = [12, 16, 20, 24, 30, 36];
  return (
    <LevelSectionWrapper>
      <h2>
        <span>Welcome to </span>Memory Game
      </h2>
      <div className='box-container'>
        {levelArr?.map((item, index) => {
          return <LevelBox item={item} index={index} />;
        })}
      </div>
    </LevelSectionWrapper>
  );
};
const fadeIn = keyframes`
  0% {
  
      color:${setColor.mainWhite}
    
  }
  100% {
      color:${setColor.mainBlack}
    }
  }
`;

const LevelSectionWrapper = styled(SectionWrapper)`
  h2 {
    animation: 3s ${fadeIn} ease-out infinite;
  }
  span {
    color: ${setColor.primaryColor};
  }
  .box-container {
    width: 100%;
    margin: 2vh 0 2vh 0;
    display: flex;
    flex-direction: column;
  }
`;
export default Levelboard;
