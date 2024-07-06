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
    <div className="flex items-center justify-center space-x-2 w-full">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="bg-[#333] text-white border border-[#444] rounded-full px-4 py-2 w-full md:w-96 placeholder-gray-400 focus:outline-none focus:border-red-600"
        placeholder="Trainspotting..."
      />
    </div>
  );
};

export default SearchBar;
