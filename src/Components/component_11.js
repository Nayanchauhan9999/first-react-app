import React from 'react';
import { useState } from 'react';

export default function UpdateTimeOnClick() {
    let date = new Date();
    let time = date.toLocaleTimeString()
    let [state,setState] = useState(time);
    function updatedTime(){
       let newTime = new Date().toLocaleTimeString();
       setState(newTime);
    }
  return (
    <React.Fragment>
    <hr/>
        <h1> {state} </h1>
        <button onClick={updatedTime}>Current Time</button>
        <hr/>
    </React.Fragment>
  )
}
