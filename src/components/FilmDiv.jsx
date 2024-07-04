import React, { useState } from "react";
import { filmData } from "../assets/data/filmData";

const FilmDiv = ({ searchQuery }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredFilms = filmData.filter(
    (film) =>
      film.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      film.releaseYear.toString().includes(searchQuery) ||
      film.director.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log(filteredFilms);
  const handleNext = () => {
    if (currentIndex < filteredFilms.length - 3) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  if (filteredFilms.length === 0) {
    return null;
  }

  return (
    <div className="relative max-w-7xl mx-auto p-6">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {filteredFilms.map((film) => (
            <div className="flex-shrink-0 w-1/3 px-8" key={film.id}>
              <FilmCard
                title={film.title}
                genre={film.genre}
                releaseYear={film.releaseYear}
                director={film.director}
                description={film.description}
                image={film.image}
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
    </div>
  );
};

const FilmCard = ({
  title,
  genre,
  releaseYear,
  director,
  description,
  image,
}) => {
  return (
    <div className="bg-zinc-950 rounded-lg shadow-md p-4 mb-4">
      <div className="relative w-full pb-[177%] mb-4">
        <img
          src={image}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg"
        />
      </div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-white mb-1">
        <strong>Genre:</strong> {genre}
      </p>
      <p className="text-white mb-1">
        <strong>Release Year:</strong> {releaseYear}
      </p>
      <p className="text-white mb-1">
        <strong>Director:</strong> {director}
      </p>
      <p className="text-gray-100 mt-2 overflow-hidden text-ellipsis whitespace-nowrap">
        {description}
      </p>
    </div>
  );
};

export default FilmDiv;
