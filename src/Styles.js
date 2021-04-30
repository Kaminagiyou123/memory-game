import styled, { css, keyframes } from "styled-components";

export const setColor = {
  primaryColor: "#af9a7d",
  mainWhite: "#fff",
  mainBlack: "#222",
  mainGreen: "rgba(85, 107, 47,0.7)",
  lightGrey: "#f7f7f7",
};
export const setFont = {
  main: "font-family: 'Lato', sans-serif;",
  slanted: "font-family: 'Courgette', cursive;",
};

//banner position
export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `display: flex;
  align-items: ${y};
  justify-content: ${x};`;
};

//hero image
export const setBackground = ({
  img = "../../images/homeBcg.jpeg",
  color = " rgba(0, 0, 0, 0)",
} = {}) => {
  return `background:linear-gradient(${color}, ${color}),
    url(${img}) center/cover fixed no-repeat;`;
};

export const setRem = (number = 16) => {
  return `${number / 16}rem`;
};

export const setLetterSpacing = (number = 2) => {
  return `letter-spacing:${number}px`;
};

export const setBorder = ({
  width = "2px",
  style = "solid",
  color = "black",
} = {}) => {
  return `border:${width} ${style} ${color}`;
};
//media query function
const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
};
// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const setTransition = ({
  property = "all",
  time = "0.3s",
  timing = "ease-in-out",
} = {}) => {
  return `transition:${property} ${time} ${timing}`;
};

export const setShadow = {
  light: "box-shadow:3px 3px 15px 5px #000000",
  dark: "box-shadow:6px 6px 15px 5px #000000",
  darkest: "box-shadow:10px 10px 15px 5px #000000",
};
