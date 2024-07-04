import React, { useState } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleMenu}
        className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-400 hover:border-gray-400"
      >
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-black border rounded shadow-lg">
          <a href="#a" className="block px-4 py-2 text-white hover:bg-gray-900">
            Home
          </a>
          <a href="#a" className="block px-4 py-2 text-white hover:bg-gray-900">
            About
          </a>
          <a href="#a" className="block px-4 py-2 text-white hover:bg-gray-900">
            Services
          </a>
          <a href="#a" className="block px-4 py-2 text-white hover:bg-gray-900">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
