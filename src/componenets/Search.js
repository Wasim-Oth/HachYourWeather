import React from "react";

const Search = (props) => {
  return (
    <div className="search">
      <input type="text" onChange={props.Change} placeholder="Search City" />
      <button onClick={props.Fetch}> Search </button>
    </div>
  );
};

export default Search;
