import React from "react";

function Component2() {
  const myName = "nayan";
  const firstRandomNum = Math.round(Math.random() * 1000);
  const secondRandomNum = Math.round(Math.random() * 1000);
  return (
    <React.Fragment>
      <h1>
        How to use javascript variable in jsx file : example below : Component 2
      </h1>
      <p>hi My name is {myName}</p>
      <p>
        Refresh the page to see random number ={" "}
        {Math.round(Math.random() * 1000)}
      </p>
      <p>
        Sum of {firstRandomNum} + {secondRandomNum} ={" "}
        {firstRandomNum + secondRandomNum}.
      </p>
      <p>
        Substraction of {firstRandomNum} - {secondRandomNum} ={" "}
        {firstRandomNum - secondRandomNum}.
      </p>
      <p>
        Multiplication of {firstRandomNum} * {secondRandomNum} ={" "}
        {firstRandomNum * secondRandomNum}.
      </p>
      <p>
        Division of {firstRandomNum} &#247; {secondRandomNum} ={" "}
        {firstRandomNum / secondRandomNum}.
      </p>
      <hr/>
    </React.Fragment>
  );
}
export { Component2 };
