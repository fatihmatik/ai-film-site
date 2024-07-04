import React from "react";

const BurgerMenu = ({ onSetPage }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handlePageChange = (page) => {
    onSetPage(page);
    setIsOpen(false);
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
          <button
            className="w-full px-4 py-2 text-white hover:bg-gray-900"
            onClick={() => handlePageChange("home")}
          >
            Home
          </button>
          <button
            className="w-full px-4 py-2 text-white hover:bg-gray-900"
            onClick={() => handlePageChange("about")}
          >
            About
          </button>
          <button
            className="w-full px-4 py-2 text-white hover:bg-gray-900"
            onClick={() => handlePageChange("contact")}
          >
            Contact
          </button>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
