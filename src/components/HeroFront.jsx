import React from "react";
import NavBarLogo from "./NavBarLogo";

const HeroFront = () => {
  return (
    <div className="relative bg-black p-6 mx-auto max-w-md rounded-lg shadow-lg text-center">
      <header className="flex flex-col mb-4">
        <NavBarLogo />
        <h1 className="text-white text-3xl font-bold">Top Recommendations</h1>
      </header>
      <nav className="flex flex-col gap-2 mb-4">
        <a href="#a" className="text-white hover:text-gray-400">
          Top 10 by You!
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
