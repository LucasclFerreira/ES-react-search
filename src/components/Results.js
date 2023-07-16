import React, { useEffect, useState } from "react";
import Result from "./Result";

const Results = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch()
        // localhost
      ).json();
      setData(data);
    };

    dataFetch();
  }, []);

  return (
    <div>
      {data.map((result) => (
        <Result key={result.url} result={result} />
      ))}
    </div>
  );
};

export default Results;
