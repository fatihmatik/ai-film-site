import React, { useEffect, useState } from "react";

const Modal = ({ movie, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleClose}
    >
      <div
        className={`bg-black rounded-md shadow-lg overflow-hidden w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl transform transition-transform duration-300 ${
          isVisible ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen md:h-auto">
          <div className="md:col-span-1">
            <img
              src={movie.photoURL}
              alt={movie.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="p-6 md:p-8 md:col-span-1 overflow-y-auto max-h-[calc(100vh-4rem)]">
            <button
              onClick={handleClose}
              className="text-red-600 hover:text-red-700 float-right text-xl font-bold mb-4"
            >
              X
            </button>
            <h2 className="text-xl md:text-3xl font-bold mb-2 text-red-600">
              {movie.title}
            </h2>
            <p className="text-white mb-1">
              <strong>Genres:</strong> {movie.genre}
            </p>
            <p className="text-white mb-1">
              <strong>Release Year:</strong> {movie.releaseYear}
            </p>
            <p className="text-white mb-1">
              <strong>Director:</strong> {movie.director}
            </p>
            <p className="text-gray-200 mt-2">{movie.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
