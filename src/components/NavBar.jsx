import React from "react";
import SearchBar from "./SearchBar";
import BurgerMenu from "./BurgerMenu";
import NavBarLogo from "./NavBarLogo";

const NavBar = ({ onSearch }) => {
  return (
    <div className="bg-black fixed top-0 left-0 w-full flex items-center justify-between p-4 shadow-2 z-50">
      <NavBarLogo />
      <SearchBar onSearch={onSearch} />
      <BurgerMenu />
    </div>
  );
};

export default NavBar;
