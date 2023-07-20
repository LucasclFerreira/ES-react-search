import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ getQuery, getOrderBy, getOrder }) => {
  const [input, setInput] = useState("");
  const [orderBy, setOrderBy] = useState(null)
  const [order, setOrder] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    // console.log('button clicked with input: ' + input);
    let dateRange = null;
    if (startDate && endDate) {
      dateRange = startDate + 'to' + endDate
    }
    getQuery(input, orderBy, order, dateRange);
  };

  const handleOrderBy = (e) => {
    let value = e.target.value === 'Order by' ? null : e.target.value;
    setOrderBy(value)
  };

  const handleOrder = (e) => {
    let value = e.target.value === 'Order' ? null : e.target.value;
    setOrder(value)
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
            <select className="select select-ghost w-full max-w-xs mb-2" onChange={handleOrderBy}>
              <option selected>Order by</option>
              <option>Reading Time</option>
              <option>Creation Date</option>
            </select>
            <select className="select select-ghost w-full max-w-xs mb-2" onChange={handleOrder}>
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
              onChange={e => setStartDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="End: yyyy-MM-dd"
              className="input input-ghost w-full max-w-xs"
              onChange={e => setEndDate(e.target.value)}
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
      <Link to='/results'>
        <button onClick={handleClick} className="btn btn-primary">
          Search
        </button>
      </Link>
    </div>
  );
};

export default Search;
