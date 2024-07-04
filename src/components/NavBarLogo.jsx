import React from "react";
import logo from "../assets/images/bannerlogo.png";

const NavBarLogo = ({ onSetPage }) => {
  const handlePageChange = (page) => {
    onSetPage(page);
  };

  return (
    <button onClick={() => handlePageChange("home")}>
      <img src={logo} alt="logo" className="h-full w-full" />
      <div className="absolute inset-0 bg-black opacity-20 hover:opacity-0 transition-opacity duration-300"></div>
    </button>
  );
};

export default NavBarLogo;
