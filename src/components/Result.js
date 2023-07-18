import React from "react";

const Result = ({ result }) => {
  return (
    // <div>
    //   <h2>{result.title}</h2>
    //   <a href={result.url}>{data.url}</a>
    //   <p>{result.abs}</p>
    //   <p>{result.readingTime}</p>
    //   <p>{result.creationDate}</p>
    // </div>

    <div className="card w-96 glass">
      <div className="card-body">
        <h2 className="card-title">{result.title}</h2>
        <p>{result.abs}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">
            <a href={result.url} target="_blank">
              Read More
            </a>
          </button>
        </div>
        <div className="badge badge-primary">{result.readingTime} min</div>
        <div className="badge badge-secondary">{result.creationDate}</div>
      </div>
    </div>
  );
};

export default Result;
