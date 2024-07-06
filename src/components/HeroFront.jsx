import React from "react";
import NavBarLogo from "./NavBarLogo";

const HeroFront = () => {
  return (
    <div className="relative bg-black p-6 mx-auto max-w-md rounded-lg shadow-lg text-center">
      <header className="flex flex-col mb-4">
        <NavBarLogo onSetPage={() => {}} />
        <h1 className="text-white text-3xl font-bold">Top Recommendations</h1>
      </header>
    </div>
  );
};

export default HeroFront;
