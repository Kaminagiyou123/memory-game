import styled from "styled-components";
import { setColor, setRem, setBorder, setFlex, setFont } from "../../Styles";
import { useProductsContext } from "../../Context";
const Box = ({ item, index }) => {
  const { clickCard, cardsStatus, cardsPaired, cardTwo } = useProductsContext();
  if (cardsPaired[index] === 1) {
    return <WrapperHideBox>{item}</WrapperHideBox>;
  }
  if (cardsStatus[index] === 1 && !cardTwo) {
    return (
      <BoxWrapper onClick={() => clickCard({ index, item })}>{item}</BoxWrapper>
    );
  }
  if (cardsStatus[index] === 1 && cardTwo) {
    return <BoxWrapper>{item}</BoxWrapper>;
  }
  if (cardsStatus[index] === 0 && !cardTwo) {
    return (
      <WrapperHideNumber onClick={() => clickCard({ index, item })}>
        {item}
      </WrapperHideNumber>
    );
  }
  if (cardsStatus[index] === 0 && cardTwo) {
    return <WrapperHideNumber>{item}</WrapperHideNumber>;
  }
};

export const BoxWrapper = styled.button`
  width: 20vw;
  height: 20vh;
  ${setBorder({ width: "6px", color: setColor.primaryColor })};
  background: ${setColor.mainBlack};
  color: ${setColor.primaryColor};
  font-size: ${setRem(80)};
  ${setFont.slanted}
  ${setFlex()};
`;
const WrapperHideNumber = styled(BoxWrapper)`
  color: ${setColor.mainBlack};
`;
const WrapperHideBox = styled(BoxWrapper)`
  background: ${setColor.primaryColor};
  color: ${setColor.primaryColor};
  ${setBorder({ width: "6px", color: setColor.primaryColor })};
`;
export default Box;
