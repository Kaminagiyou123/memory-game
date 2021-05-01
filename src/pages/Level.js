import React from "react";
import Globals from "../components/globals/GlobalStyle";
import Hero from "../components/globals/Hero";
import level from "../images/level.jpeg";
import Levelboard from "../components/home/Levelboard";

const Level = () => {
  return (
    <div>
      <Globals />
      <Hero img={level} color='rgba(0, 0, 0, 0.3)'>
        <Levelboard />
      </Hero>
    </div>
  );
};

export default Level;
