import React from "react";
import { useState } from "react";
import Search from "../components/Search";
import Results from "../components/Results";

const SearchResult = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState(null);
  const [order, setOrder] = useState(null);
  const [dateRange, setDateRange] = useState(null);
  const numPages = 10;

  const getQuery = (searchQuery, orderBy, order, dateRange) => {
    console.log('get query chamado pelo componente search')
    searchQuery = searchQuery.replace(' ', '+')
    searchQuery = searchQuery.toLowerCase()
    setQuery(searchQuery);
    setOrderBy(orderBy);
    setOrder(order);
    setDateRange(dateRange)
    setPage(1)
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
    <div data-theme="emerald">
      <nav className="sticky top-0 z-50 bg-base-100 max-w-screen h-1/5 flex justify-between items-center px-10 lg:px-24 py-4">
        <h1 className="text-3xl font-light">SearchOnWiki</h1>
        {/* {console.log('search result component range date: ' + dateRange)} */}
        <Search getQuery={getQuery} />
      </nav>
      <main className="relative max-w-screen min-h-screen px-10 py-24 lg:px-24 flex flex-col items-center">
        {query === '' ? 
          <div className="max-h-screen flex flex-col items-center justify-center">
            <h2 className="text-5xl font-bold text-neutral mb-8">Uh-oh...</h2>
            <h2 className="text-5xl font-light text-neutral">Search something!</h2>
          </div> : 
          <div className="flex flex-col items-center">
            <Results query={query} page={page} orderBy={orderBy} order={order} dateRange={dateRange} />
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
          </div>
        }
        
      </main>
      
    </div>
  );
};

export default SearchResult;
