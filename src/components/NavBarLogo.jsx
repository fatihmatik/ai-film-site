import React from "react";
import netflixLogo from "../assets/images/netflix_logo.png";

const NavBarLogo = () => {
  return (
    <>
      <div className="relative h-auto w-1/12">
        <img src={netflixLogo} alt="netflixlogo" className="h-full w-full" />
        <div className="absolute inset-0 bg-black opacity-10 hover:opacity-0 transition-opacity duration-300"></div>
      </div>
    </>
  );
};

export default NavBarLogo;
