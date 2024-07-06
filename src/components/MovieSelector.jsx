import React, { useState, useEffect, useRef } from "react";

const MovieSelector = ({ onSelectMovie, moviesArr }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const selectorRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          selectorRef.current.classList.add("glow");
        } else {
          selectorRef.current.classList.remove("glow");
        }
      },
      { threshold: 0.5 } // Adjust this value as needed
    );

    if (selectorRef.current) {
      observer.observe(selectorRef.current);
    }

    return () => {
      if (selectorRef.current) {
        observer.unobserve(selectorRef.current);
      }
    };
  }, []);

  const handleChange = (id, title) => {
    setSearchQuery(title);
    setIsDropdownOpen(false);
    onSelectMovie(id);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setIsDropdownOpen(true);
  };

  const filteredMovies = moviesArr
    .filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 50);

  return (
    <div>
      <style jsx>{`
        .glow {
          box-shadow: 0 0 20px 5px rgba(255, 0, 0, 0.7); /* Red glow */
          transition: box-shadow 0.5s ease-in-out;
        }
      `}</style>
      <div
        ref={selectorRef}
        className="w-full max-w-md mx-auto p-4 bg-black rounded-lg shadow-lg text-white sm:max-w-lg lg:max-w-xl"
      >
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
                  onMouseDown={() => handleChange(movie.id, movie.title)}
                >
                  {movie.title}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieSelector;
