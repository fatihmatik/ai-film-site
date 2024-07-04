import React from "react";
import backgroundImage from "../assets/images/hero1-background.jpg";

const HeroBackground = () => {
  return (
    <div className="absolute -z-10 top-0 left-0 ">
      <img src={backgroundImage} className="w-screen" alt="background-hero" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent shadow-[0_-10px_15px_rgba(0,0,0,0.5)]"></div>
    </div>
  );
};

export default HeroBackground;
