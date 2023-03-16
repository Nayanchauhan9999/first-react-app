import React, { useState } from "react";

export default function UpdateTimeAutomatically() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    const [state,setState] = useState(time);
    const x = () =>{
        let date = new Date();
        let time = date.toLocaleTimeString();
        setState(time)
    }
    setInterval(x,1000);
  return (
    <React.Fragment>
      <h1> Updte time automatically using setInterval in reactJS : component : 12</h1>
      <h1>Time :{state} </h1>
    </React.Fragment>
  );
}
