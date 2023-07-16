import React from "react";

const Result = ({ result }) => {
  return (
    <div>
      <h2>{result.title}</h2>
      <a href={result.url}>{data.url}</a>
      <p>{result.abs}</p>
      <p>{result.readingTime}</p>
      <p>{result.creationDate}</p>
    </div>
  );
};

export default Result;
