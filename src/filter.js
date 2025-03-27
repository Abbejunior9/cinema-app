import React from "react";

const Filter = ({ setSearchTitle, setSearchRating }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Rechercher un film..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Note minimale"
        onChange={(e) => setSearchRating(e.target.value)}
      />
    </div>
  );
};

export default Filter;
