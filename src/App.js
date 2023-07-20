import { useState } from "react";
import "./App.css";
import Search from "./components/Search";
// import { useNavigate } from "react-router-dom";
// import Result from "./components/Result";

function App() {
  const [query, setQuery] = useState(null);

  const getQuery = (searchQuery) => {
    setQuery(searchQuery);
  };

  console.log(query);
  return (
    <div className="App w-screen h-screen flex flex-col justify-center items-center" data-theme="emerald">
      <h1 className="text-5xl font-light p-8">SearchOnWiki</h1>
      <Search getQuery={getQuery} />
    </div>
  );
}

export default App;
