import React from "react";

function Component4() {
  let date = new Date();
  let currDate = date.toLocaleDateString();
  let currTime = date.toLocaleTimeString();
  return (
    <React.Fragment>
      <h1>show date and time in ReactJS : component 4</h1>
      <h3>Author : Nayan Chauhan</h3>
      <p>Today's Date is : {currDate} </p>
      <p>Current Time is : {currTime} </p>
      <hr/>
    </React.Fragment>
  );
}
export { Component4 };
