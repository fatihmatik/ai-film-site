import React, { useState } from "react";
import filmData from "../assets/data/processed_movies.json";
import FilmCard from "./FilmCard";
import Modal from "./Modal";

const RecommendFilms = ({ recommArr }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState(null);

  let filteredFilms = [];

  if (Array.isArray(recommArr)) {
    filteredFilms = filmData.filter((item) =>
      recommArr.some((filterItem) =>
        item.title.toLowerCase().includes(filterItem.toLowerCase())
      )
    );
  } else if (typeof recommArr === "string") {
    filteredFilms = filmData;
  }

  const handleNext = () => {
    if (currentIndex < filteredFilms.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 3);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 3);
    }
  };

  const handleOpenModal = (film) => {
    setSelectedFilm(film);
    setShowModal(true);
  };

  if (!recommArr || filteredFilms.length === 0) {
    return null;
  }

  return (
    <div className="relative max-w-7xl mx-auto p-4 md:p-6">
      <h1 className="text-xl md:text-2xl text-white font-bold ml-4 md:ml-8 mb-2 bg-black rounded-md w-fit p-2">
        Recommended films
      </h1>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {filteredFilms.map((film) => (
            <div
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 px-2 md:px-4"
              key={film.id}
            >
              <FilmCard
                title={film.title}
                genre={film.genre}
                releaseYear={film.releaseYear}
                director={film.director}
                description={film.description}
                photoURL={film.photoURL}
                onOpen={() => handleOpenModal(film)}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-zinc-950 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-zinc-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        ›
      </button>
      {showModal && selectedFilm && (
        <Modal movie={selectedFilm} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default RecommendFilms;
