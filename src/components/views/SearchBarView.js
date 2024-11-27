import React from 'react';


const SearchBarView = ({ onSearch }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search Pokemon by name..."
        onChange={(e) => onSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBarView;