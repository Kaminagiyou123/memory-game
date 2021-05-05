import React, { useEffect } from "react";
import styled from "styled-components";
import { setColor, setFont, setRem, setBorder } from "../../Styles";
import { useProductsContext } from "../../Context";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { updateData } from "../../Airtable";
const Scoreboard = ({ className }) => {
  const { user, isAuthenticated } = useAuth0();
  const { moves, pairsFound, bestRecord, startNew } = useProductsContext();

  useEffect(() => {
    if (user && bestRecord) {
      updateData(user, { level0score: bestRecord });
    }
  }, [user, bestRecord]);

  return (
    <div className={className}>
      <div className='info-box'>
        <span>{moves}</span> Moves
      </div>
      <div className='info-box'>
        <span>{pairsFound}</span> Pairs Found
      </div>
      <div className='info-box'>
        <span>{bestRecord ? bestRecord : 0}</span> Moves Best Record
      </div>
      <button className='info-btn' onClick={startNew}>
        Start a New Round
      </button>
      <Link to='/' className='info-btn'>
        back home
      </Link>
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
    text-decoration: none;
  }
`;
