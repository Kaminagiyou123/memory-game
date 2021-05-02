import React from "react";
import styled from "styled-components";
import Scoreboard from "./Scoreboard";
import {
  setColor,
  setRem,
  setBorder,
  setFont,
  setLetterSpacing,
} from "../../Styles";
import Box from "./Box";
import { useProductsContext } from "../../Context";

const Gameboard = () => {
  const { cardsNumbers } = useProductsContext();

  return (
    <SectionWrapper>
      <h2>Memory Game</h2>
      <div
        className={
          cardsNumbers.length > 20 ? "box-container2" : "box-container"
        }
      >
        {cardsNumbers?.map((item, index) => {
          return <Box item={item} index={index} />;
        })}
      </div>
      <Scoreboard />
    </SectionWrapper>
  );
};
export const SectionWrapper = styled.section`
  width: 80 vw;
  height: auto;
  background: ${setColor.mainGreen};

  h2 {
    ${setLetterSpacing(3)};
    ${setFont.slanted};
    font-size: xx-large;
    text-align: center;
    background: ${setColor.mainBlack};
    color: ${setColor.mainWhite};
    padding: ${setRem(10)} 0 ${setRem(10)} 0;
    ${setBorder({ width: "6px", color: setColor.primaryColor })};
  }
  .box-container {
    margin: ${setRem(30)};
    background-color: ${setColor.mainGreen};

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: ${setRem(2)};
  }
  .box-container2 {
    margin: ${setRem(30)};
    background-color: ${setColor.mainGreen};

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: ${setRem(2)};
  }
`;

export default Gameboard;
