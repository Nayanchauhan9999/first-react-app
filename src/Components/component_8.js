import React from "react";
function Component8() {
  function Sum(a, b) {
    return a + b;
  }
  function Subtraction(a, b) {
    return a - b;
  }
  function Multiplication(a, b) {
    return a * b;
  }
  function Division(a, b) {
    return a / b;
  }
  let a = 100;
  let b = 50;
  return (
    <React.Fragment>
      <h1>Bulid Basic Calculator : Component 8</h1>
      <p>Number 1 : {a}</p>
      <p>Number 2 : {b}</p>
      <p>sum of Number 1 and Number 2 is : {Sum(a, b)} </p>
      <p>Subtraction of Number 1 and Number 2 is : {Subtraction(a, b)} </p>
      <p>Multiplication of Number 1 and Number 2 is : {Multiplication(a, b)} </p>
      <p>Division of Number 1 and Number 2 is: {Division(a, b)}</p>
      <hr/>
    </React.Fragment>
  );
}
export { Component8 };
