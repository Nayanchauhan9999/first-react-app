import React from "react";
import { useState } from "react";

function UseState() {
  // Array destructuring in javascript
  //   let name = ["nayan", "hitesh", "darshan"];
  //   console.log(name);
  //   let [n, h, d] = name;

//   let state = useState(0); //Aam Zindagi
    let [state,setState] = useState(0); // After ES6 array distructuring (Mentos zindagi)
  const increment = ()=>{
     setState(state +1)
  }
  const decrement = ()=>{
     setState(state -1)
  }
  const reset = ()=>{
     setState(0)
  }
  
  return (
    <React.Fragment>
    <hr/>
    <h1>increment counter and Decrement Counter : component - 10</h1>
      <h1>{state} </h1>
      <button onClick={increment}>Increment(+)</button>
      <button onClick={decrement}>Decrement(-)</button>
      <button onClick={reset}>Reset</button>

    </React.Fragment>
  );
}
export { UseState };
