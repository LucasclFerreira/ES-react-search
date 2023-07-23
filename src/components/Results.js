// import React, { useEffect, useState } from "react";
import Result from "./Result";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { Router, useNavigate } from "react-router-dom";

const sortResults = (query, page, orderBy, order, dateRange=null) => {
  let orderToSort;
  let sortField;
  let url;

  if (orderBy === 'Reading Time') {
    sortField = 'reading_time'
  } else {
    sortField = 'dt_creation'
  }

  if (order === 'Ascending') {
    orderToSort = 'asc'
  } else {
    orderToSort = 'desc'
  }
  console.log(sortField, orderToSort)
  if (dateRange) {
    url = `http://localhost:8080/v1/searchBetweenDatesAndSort?query=${query}&page=${page}&orderToSort=${orderToSort}&sortField=${sortField}&rangeDate=${dateRange}`;
  } else {
    url = `http://localhost:8080/v1/searchAndSort?query=${query}&page=${page}&orderToSort=${orderToSort}&sortField=${sortField}`;
  }
  // console.log('nova url: ' + url);
  return url
}

const Results = ({ query, page, orderBy, order, dateRange, getNumPages }) => {
  const navigate = useNavigate()
  let url = `http://localhost:8080/v1/search?query=${query}&page=${page}`;

  if (orderBy && dateRange) {
    console.log('orderBy and dateRange: ' + dateRange)
    url = sortResults(query, page, orderBy, order, dateRange);
  } else if (orderBy) {
    url = sortResults(query, page, orderBy, order);
  } else if (dateRange) {
    console.log('orderBy and dateRange only: ' + dateRange)
    url = `http://localhost:8080/v1/searchBetweenDates?query=${query}&page=${page}&rangeDate=${dateRange}`;
  }


  const { data, isLoading, error, isError } = useQuery({
    queryKey: [query, page, orderBy, order, dateRange],
    queryFn: async () => {
      const { data } = await axios.get(url);
      getNumPages(data.numDocs)
      // navigate('/results')
      return data;
    }
  });

  // useEffect(() => {
  //   navigate('/results')
  // }, [data])

  if (isError) {
    return <div className="text-danger">{ error }</div>
  }

  if (isLoading) {
    return <div className="text-5xl text-warning font-bold">Loading...</div>
  }

  return (
    <div>
      {/* {console.log(url)} */}
      { data.suggestion && <p className="text-xl text-center font-light ml-2 border-l-4 border-r-4 border-base-400 mb-8">I assume you're searching for <span className="text-error font-bold">{data.suggestion}</span></p>}
      { data.results && data.results.map((result) => (
        <Result key={result.url} result={result} />
      )) }
    </div>
  );
};

export default Results;
