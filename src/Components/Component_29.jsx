import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";

function NewsAPI() {
  const [state, setState] = useState();
  let [page, setPage] = useState(1);
  useEffect(() => {
    newsData();
  },[]);
  const newsData = () => {
    fetch(
      `https://newsapi.org/v2/everything?q=Apple&pageSize=20&sortBy=popularity&apiKey=69da6fd777484469bad09b26a7868991&page=${page}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setState(data.articles);
      });
  };

  function pageChange(event) {
    let value = event.target.outerText;
    page = value;
    setPage(value);
    newsData();
  }
  return (
    <React.Fragment>
      <div className="container d-flex justify-content-center">
        <div>
          <Pagination count={5} onChange={pageChange} size="large" />
        </div>
      </div>
      <h6>page : {page}</h6>
      {state &&
        state.length > 0 &&
        state.map((value, index) => {
          return (
            <div
              key={index}
              style={{ textAlign: "justify", width: "80%", margin: "auto" }}
            >
              <hr />
              <h3>
                {value.title} #News:{index + 1}
              </h3>
              <p style={{ textAlign: "right" }}>Author Name : {value.author}</p>
              <p>
                PublishAt : {value.publishedAt} source : {value.source.name}
              </p>
              <p>Discription : {value.description} </p>
              <div
                className="d-flex justify-content-center"
                style={{ boxSizing: "border-box" }}
              >
                <img
                  src={value.urlToImage}
                  style={{ width: "80%", height: "100%" }}
                  alt="newsimg"
                />
              </div>
              <p> {value.content} </p>
              <a href={value.url} target="_blank" rel="noreferrer">
                <button className="btn btn-primary btn-sm">Read More</button>
              </a>
            </div>
          );
        })}
      <div className="container d-flex justify-content-center">
        <div>
          <Pagination count={5} onChange={pageChange} size="large" />
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
}

export default NewsAPI;
