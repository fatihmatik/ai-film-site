import React from "react";
import netflixLogo from "../assets/images/netflix_logo.png";

const HeroFront = () => {
  return (
    <div className="relative bg-black p-6 mx-auto max-w-md rounded-lg shadow-lg text-center">
      <header className="flex flex-col mb-4">
        <div className="relative">
          <img src={netflixLogo} alt="netflixlogo" className="h-full w-full" />
          <div className="absolute inset-0 bg-black opacity-10 hover:opacity-0 transition-opacity duration-300"></div>
        </div>
        <h1 className="text-white text-3xl font-bold">Global Top 10</h1>
      </header>
      <nav className="flex flex-col gap-2 mb-4">
        <a href="#a" className="text-white hover:text-gray-400">
          Top 10 by Country
        </a>
        <a href="#a" className="text-white hover:text-gray-400">
          Most Popular Lists
        </a>
      </nav>
      <p className="text-white text-lg">
        Weekly Top 10 lists of the most-watched TV and films.
      </p>
    </div>
  );
};

export default HeroFront;
