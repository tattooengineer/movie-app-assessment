import React, { useState } from 'react';
import '../styling/SearchBar.css'
function SearchBar({ setQuery }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for a movie..."
      />
    </div>
  );
}

export default SearchBar;
