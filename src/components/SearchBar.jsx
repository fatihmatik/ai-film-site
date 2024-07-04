import React, { useState, useEffect } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (onSearch) {
      onSearch(query);
    }
  }, [query, onSearch]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="bg-[#333] text-white border border-[#444] rounded-full px-4 py-2 w-64 placeholder-gray-400 focus:outline-none focus:border-red-600"
        placeholder="Trainspotting..."
      />
      <button
        onClick={() => onSearch(query)}
        className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
