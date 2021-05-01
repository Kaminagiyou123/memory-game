import styled from "styled-components";
import { setFlex, setBackground } from "../../Styles";
const Hero = styled.header`
  min-height: 100vh;
  ${(props) => setBackground({ img: props.img, color: props.color })}
  display: flex;
  ${setFlex()}
`;

export default Hero;
