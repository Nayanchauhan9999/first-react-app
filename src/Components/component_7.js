import React from "react";

function Component7() {
  let date = new Date();
  let hour = date.getHours();
  let fName = "Nayan";
  let lName = "Chauhan";
  let great;
  if (hour >= 0 && hour <= 11) {
    great = "Good Morning";
  } else if (hour >= 12 && hour <= 19) {
    great = "Good Afternoon";
  } else if (hour >= 19 && hour <= 23) {
    great = "Good night";
  }
  let style = {
    color: "red",
    backgroundColor: "yellow",
    textShadow: "2px 2px 3px black",
  };
  return (
    <React.Fragment>
      <h1> Greating will be change like, evening, morning and afternoon : component 7</h1>
      <h1 style={style}>Hello {`${fName} ${lName}, ${great}`} </h1>
      <hr/>
    </React.Fragment>
  );
}
export { Component7 };
