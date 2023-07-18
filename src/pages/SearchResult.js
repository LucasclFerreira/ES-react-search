import React from "react";
import { useState } from "react";
import Search from "../components/Search";

const SearchResult = () => {
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const numPages = 10;

  const getQuery = (searchQuery) => {
    setQuery(searchQuery);
  };

  const handleNext = () => {
    let nextPage = page + 1;
    setPage(nextPage);
  };

  const handlePrev = () => {
    let prevPage = page - 1;
    setPage(prevPage);
  };

  return (
    <div>
      <nav className="max-w-screen h-1/5 flex justify-between items-center px-10 lg:px-24 py-4">
        <h1 className="text-3xl font-light">SearchOnWiki</h1>
        <Search getQuery={getQuery} />
      </nav>
      <main className="max-w-screen min-h-screen bg-secondary px-10 py-24 lg:px-24 flex flex-col items-center">
        <h2 className="text-8xl font-bold text-neutral">teste</h2>
        <div className="join my-8">
          {page === 1 ? (
            <button className="join-item btn btn-disabled">«</button>
          ) : (
            <button className="join-item btn" onClick={handlePrev}>
              «
            </button>
          )}
          <button className="join-item btn">{page}</button>
          {page === numPages ? (
            <button className="join-item btn btn-disabled">»</button>
          ) : (
            <button className="join-item btn" onClick={handleNext}>
              »
            </button>
          )}
        </div>
      </main>
      {/* <Results query={query} /> */}
    </div>
  );
};

export default SearchResult;
