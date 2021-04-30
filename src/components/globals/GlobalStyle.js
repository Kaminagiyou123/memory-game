import { createGlobalStyle } from "styled-components";
import { setColor, setFont } from "../../Styles";
const Globals = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Courgette&family=Lato:wght@700&display=swap');
*{
 margin:0;
 padding:0;
 box-sizing:border-box;
};

body{
 font-size:100%;
 color:${setColor.mainBlack};
 background:${setColor.mainWhite};
 ${setFont.main};
}
`;
export default Globals;
