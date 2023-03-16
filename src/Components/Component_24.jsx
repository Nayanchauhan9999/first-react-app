import React, { useState } from "react";

function EnglishJokes() {
    const [state, setState] = useState()

  const newJoke = () => {
    fetch("https://icanhazdadjoke.com/", {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setState(data.joke);
      });
  };
  return (
    <React.Fragment>
      <hr />
      <h2> EnglishJokes Using Fetch API Method : component24 </h2>
      <p> {state} </p>
      <button className="btn btn-primary" onClick={newJoke}>
        Next Joke
      </button>
    </React.Fragment>
  );
}

export default EnglishJokes;
