import React, { useState } from "react";

const MovieSelector = ({ onSelectMovie, moviesArr }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to handle movie selection
  const handleChange = (id, title) => {
    setSearchQuery(title);
    setIsDropdownOpen(false); // Close the dropdown after selection
    onSelectMovie(id); // Use the new id directly
  };

  // Function to handle search input
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setIsDropdownOpen(true); // Open the dropdown when typing
  };

  // Filter movies based on search query
  const filteredMovies = moviesArr
    .filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 50);

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-black rounded-lg shadow-lg text-white sm:max-w-lg lg:max-w-xl">
      <label
        htmlFor="filmSearch"
        className="block text-2xl font-semibold mb-2 text-center text-red-600 md:3xl"
      >
        What's your Favorite Film?
      </label>
      <div className="relative">
        <input
          id="filmSearch"
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Type to search..."
          className="block w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-900 text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
        />
        {isDropdownOpen && (
          <div className="absolute z-10 w-full mt-1 bg-black border border-gray-600 rounded-md max-h-60 overflow-y-auto shadow-lg">
            {filteredMovies.map((movie) => (
              <div
                key={movie.id}
                className="px-3 py-2 cursor-pointer hover:bg-gray-800"
                onMouseDown={() => handleChange(movie.id, movie.title)} // Use onMouseDown instead of onClick
              >
                {movie.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieSelector;
