import styled from "styled-components";
import { setColor, setRem, setBorder, setFlex, setFont } from "../../Styles";
const Box = ({ item }) => {
  return <BoxWrapper>{item}</BoxWrapper>;
};

const BoxWrapper = styled.div`
  width: 20vw;
  height: 20vh;
  ${setBorder({ width: "6px", color: setColor.primaryColor })};
  background: ${setColor.mainBlack};
  color: ${setColor.primaryColor};
  font-size: ${setRem(80)};
  ${setFont.slanted}
  ${setFlex()};
`;
export default Box;
