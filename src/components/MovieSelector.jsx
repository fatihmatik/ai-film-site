import React, { useState } from "react";

const MovieSelector = ({ onSelectMovie, moviesArr }) => {
  const [selectedFilmId, setSelectedFilmId] = useState(null);

  const handleChange = (event) => {
    const id = parseInt(event.target.value, 10);
    setSelectedFilmId(id);
    onSelectMovie(id); // Use the new id directly
  };

  return (
    <div className="text-white w-full max-w-sm mx-auto p-4 bg-black rounded-lg shadow-md">
      <label
        htmlFor="filmSelect"
        className="block text-lg font-semibold mb-2 text-center"
      >
        Select a Movie to Recommend From
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
        {moviesArr.slice(0, 50).map((movie) => (
          <option key={movie.id} value={movie.id}>
            {movie.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MovieSelector;
