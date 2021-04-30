import React from "react";
import Globals from "../components/globals/GlobalStyle";
import Hero from "../components/globals/Hero";
import mainImg from "../images/mainImg.jpeg";
import Gameboard from "../components/home/Gameboard";

const Home = () => {
  return (
    <>
      <Globals />
      <Hero img={mainImg} color={"rgba(0, 0, 0, 0)"}>
        <Gameboard />
      </Hero>
    </>
  );
};

export default Home;
