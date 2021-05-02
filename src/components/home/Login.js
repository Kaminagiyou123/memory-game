import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { SmallBtn } from "../globals/Buttons";
import styled from "styled-components";
import {
  setColor,
  setRem,
  setBorder,
  setFont,
  setLetterSpacing,
} from "../../Styles";
const LoginButton = ({ className }) => {
  const { loginWithRedirect, logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();

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
