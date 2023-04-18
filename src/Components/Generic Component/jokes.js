import axios from "axios";
import React, { useEffect, useState } from "react";

function Jokes({title,link,headers}) {
  const [joke, setJoke] = useState();
  useEffect(() => {
    show();
    //eslint-disable-next-line
  }, []);
  const show = async () => {
    const response = await axios.get(link,headers);
    console.log(headers)
    const apiData = response.data.data[0].jokeContent;
    setJoke(apiData);
  };
  const nextJoke = () => {
    show();
  };

  return (
    <React.Fragment>
      <div className="container rounded bg-light border">
      <h2 className="bg-dark text-light p-3 text-center display-6 mt-4"> {title}</h2>
      {!joke ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container mt-5 bg-light">
          <p className="display-6"> {joke} </p>
          <div className="container text-center">
            <button onClick={nextJoke} className="btn btn-primary mt-3 btn-sm">
              Next Joke
            </button>
          </div>
        </div>
      )}
      </div>
    </React.Fragment>
  );
}

export default Jokes;
