import React from "react";
import { useState } from "react";

const Search = ({ getQuery }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex flex-row">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs mr-4"
        onChange={handleChange}
      />
      <button onClick={(event) => getQuery(input)} className="btn btn-primary">
        Search
      </button>
    </div>
  );
};

export default Search;
