import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
// import Result from "./components/Result";

function App() {
  const [query, setQuery] = useState(null);

  const getQuery = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <div className="App w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-light p-8">SearchOnWiki</h1>
      <Search getQuery={getQuery} />
      {/* <Result query={query} /> */}
    </div>
  );
}

export default App;
