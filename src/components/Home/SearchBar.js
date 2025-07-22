// src/components/SearchBar.js
import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search dishes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="border w-[80%] mx-auto block px-4 py-2 mt-6 rounded-lg shadow"
    />
  );
};

export default SearchBar;
