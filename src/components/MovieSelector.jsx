// MovieSelector.js
import React, { useState } from "react";
import { filmData } from "../assets/data/filmData"; // Import your filmData array

const MovieSelector = ({ onSelectMovie }) => {
  const [selectedFilmId, setSelectedFilmId] = useState(null);

  // Handle film selection
  const handleChange = (event) => {
    const id = parseInt(event.target.value, 10);
    setSelectedFilmId(id);

    // Find the selected film
    const selectedFilm = filmData.find((film) => film.id === id);

    // Pass the selected film's title to the parent component
    if (selectedFilm) {
      onSelectMovie(selectedFilm.title);
    }
  };

  return (
    <div className="text-white w-full max-w-sm mx-auto p-4 bg-black rounded-lg shadow-md">
      <label
        htmlFor="filmSelect"
        className="block text-lg font-semibold mb-2 text-center"
      >
        Select a Movie
      </label>
      <select
        id="filmSelect"
        value={selectedFilmId || ""}
        onChange={handleChange}
        className="block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-900 text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
      >
        <option value="" disabled>
          Select a movie
        </option>
        {filmData.map((film) => (
          <option key={film.id} value={film.id}>
            {film.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MovieSelector;
