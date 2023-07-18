import React from "react";
import { useState } from "react";

const Search = ({ getQuery }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex flex-row items-center">
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="btn m-1">
          Tools
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <select className="select select-ghost w-full max-w-xs mb-2">
              <option selected>Order by</option>
              <option>Reading Time</option>
              <option>Creation Date</option>
            </select>
            <select className="select select-ghost w-full max-w-xs mb-2">
              <option selected>Order</option>
              <option>Ascending</option>
              <option>Descending</option>
            </select>
          </li>
          <li>
            <input
              type="text"
              placeholder="Start: yyyy-MM-dd"
              className="input input-ghost w-full max-w-xs mb-2"
            />
            <input
              type="text"
              placeholder="End: yyyy-MM-dd"
              className="input input-ghost w-full max-w-xs"
            />
          </li>
        </ul>
      </div>

      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs ml-4 mr-4"
        onChange={handleChange}
      />
      <button onClick={(event) => getQuery(input)} className="btn btn-primary">
        Search
      </button>
    </div>
  );
};

export default Search;
