import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { SmallBtn } from "../globals/Buttons";
import styled from "styled-components";
import { setColor, setRem, setBorder, setFont } from "../../Styles";

import { createData } from "../../Airtable";
const LoginButton = ({ className }) => {
  const [data, setData] = useState(null);
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    loading,
  } = useAuth0();
  useEffect(() => {
    if (isAuthenticated && user && !loading) {
      var Airtable = require("airtable");
      var base = new Airtable({ apiKey: process.env.REACT_APP_API_KEY }).base(
        process.env.REACT_APP_BASE_ID
      );

      base("memogame")
        .select({
          filterByFormula: `username = "${user.name}"`,
        })
        .firstPage(function (err, record) {
          if (err) {
            console.error(err);
            return;
          }
          setData(record);
        });
    }
    console.log(data);

    if (data?.length === 0) {
      createData({ username: user.email });
    }
  }, [isAuthenticated]);

  return isAuthenticated ? (
    <>
      <SmallBtn
        onClick={() => logout({ returnTo: window.location.origin })}
        className={className}
      >
        <h3>hello {user.name}</h3>
        Log Out
      </SmallBtn>
    </>
  ) : (
    <SmallBtn onClick={() => loginWithRedirect()} className={className}>
      Log In
    </SmallBtn>
  );
};

export default styled(LoginButton)`
  margin-top: 5px;
  margin-left: 50%;
  transform: translate(-50%);
  h3 {
    font-size: ${setRem(15)};
    color: ${setColor.mainBlack};
    ${setFont.slanted}
  }
  border-radius: 0.5rem;
  ${setBorder({ color: setColor.mainBlack })}
`;
