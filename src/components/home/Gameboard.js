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
const Gameboard = ({ className }) => {
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  const array = [6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5];
  let newArr = shuffle(array);
  console.log(newArr);
  return (
    <section className={className}>
      <h2>Memory Game</h2>
      <div className='box-container'>
        {newArr?.map((item, index) => {
          return <Box item={item} index={index} />;
        })}
      </div>
      <Scoreboard />
    </section>
  );
};

export default styled(Gameboard)`
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
`;
