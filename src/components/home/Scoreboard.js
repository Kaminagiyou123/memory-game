import React from "react";
import styled from "styled-components";
import { setColor, setFont, setRem, setBorder } from "../../Styles";
const Scoreboard = ({ className }) => {
  return (
    <div className={className}>
      <div className='info-box'>
        <span>4</span> Moves
      </div>
      <div className='info-box'>
        <span>5</span> Pairs Found
      </div>
      <button className='info-btn'>Start a New Round</button>
      <button className='info-btn'>Show Number</button>
    </div>
  );
};

export default styled(Scoreboard)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: ${setColor.mainBlack};
  color: ${setColor.mainWhite};
  padding: ${setRem(0)} ${setRem(0)} ${setRem(0)} ${setRem(25)};
  ${setFont.slanted};
  font-weight: bolder;
  font-size: ${setRem(20)};
  span {
    font-size: ${setRem(30)};
    color: ${setColor.primaryColor};
  }
  .info-btn {
    margin: 10px;
    padding: 5px 10px;
    background: none;
    ${setBorder({ color: setColor.primaryColor })};
    color: ${setColor.mainWhite};
    ${setFont.slanted};
    font-weight: bolder;
    font-size: ${setRem(20)};
  }
`;
