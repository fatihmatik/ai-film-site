import React from "react";
import SearchBar from "./SearchBar";
import BurgerMenu from "./BurgerMenu";
import NavBarLogo from "./NavBarLogo";

const NavBar = ({ onSearch, onSetPage }) => {
  return (
    <div className="bg-black fixed top-0 left-0 w-full flex items-center justify-between p-4 shadow-lg z-50">
      <div className="relative h-auto w-1/4 md:w-1/12">
        <NavBarLogo onSetPage={onSetPage} />
      </div>
      <div className="hidden md:block w-1/2">
        <SearchBar onSearch={onSearch} />
      </div>
      <BurgerMenu onSetPage={onSetPage} />
    </div>
  );
};

export default NavBar;
