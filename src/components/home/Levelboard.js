import React from "react";
import { SectionWrapper } from "./Gameboard";
import styled, { keyframes } from "styled-components";
import LevelBox from "./LevelBox";
import { setColor } from "../../Styles";
import LoginButton from "./Login";
import { useAuth0 } from "@auth0/auth0-react";

const Levelboard = () => {
  const { user, isAuthenticated, loading } = useAuth0();
  const levelArr = [12, 16, 20, 24, 30, 36];
  return (
    <LevelSectionWrapper>
      <h2>
        <span>Welcome to </span>Memory Game
      </h2>
      <LoginButton />
      <div className={user ? "box-container" : "box-container-hidden"}>
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
  .box-container-hidden {
    display: none;
  }
`;
export default Levelboard;
