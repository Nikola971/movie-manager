import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { IconContext } from 'react-icons';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for movies..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">
        <IconContext.Provider value={{ color: 'wheat', size: 20 }}>
          <IoSearch />
        </IconContext.Provider>
      </button>
    </form>
  );
};

export default SearchBar;
