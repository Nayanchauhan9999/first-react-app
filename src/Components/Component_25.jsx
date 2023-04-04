import axios from "axios";
import React, { useEffect, useState } from "react";

function HindiJokes() {
  const [joke, setJoke] = useState();
  useEffect(() => {
    show();
    console.log("render")
  }, []);
  const show = async () => {
    const response = await axios.get(
      "https://hindi-jokes-api.onrender.com/jokes/2?api_key=17b6645ae69190f72c72998a8247"
    );
    const apiData = response.data.data[0].jokeContent;
    setJoke(apiData);
  };
  const nextJoke = () => {
    show();
  };

  return (
    <React.Fragment>
      <hr />
      <h2> Hindi Jokes Using Fetch API Method : component 25 </h2>
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
    </React.Fragment>
  );
}

export default HindiJokes;
