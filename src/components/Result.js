import React from "react";

const Result = ({ result }) => {
  return (
    <div className="card card-side bg-neutral-content text-neutral mb-8 drop-shadow-lg">
      <div className="card-body">
        <h2 className="card-title text-4xl font-bold tracking-wide mb-4 uppercase">{result.title}</h2>
        <p className="mb-6 text-justify">{result.abs}...</p>
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-center">
            <div className="badge badge-accent mb-1">{result.readingTime} min</div>
            <div className="badge badge-secondary">Created on {result.creationDate}</div>
          </div>
          <button className="btn btn-primary">
            <a href={result.url} target="_blank" rel="noreferrer">
              Read More
            </a>
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Result;
