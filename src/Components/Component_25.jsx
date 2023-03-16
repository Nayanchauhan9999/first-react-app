import React, { useState } from "react";

function HindiJokes (){
    const [state, setState] = useState();
    
async function nextJoke() {
        const Response = await fetch("https://hindi-jokes-api.onrender.com/jokes/2?api_key=17b6645ae69190f72c72998a8247")
        const data = await Response.json()
        setState(data.data[0].jokeContent)
        console.log(data.data[0].jokeContent)
}
  return (
    <React.Fragment>
      <hr />
      <h2> Hindi Jokes Using Fetch API Method : component 25 </h2>
      <p> {state} </p>
      <button onClick={nextJoke} className="btn btn-primary btn-sm"> Next Joke </button>

    </React.Fragment>
  );
}

export default HindiJokes;
