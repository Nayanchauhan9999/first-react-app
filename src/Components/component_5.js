import React from "react";
import camaraicon from "../cat-2.jpg";
function Component5() {
  return (
    <React.Fragment>
      <h1>JSX attribute in ReactJS : Component 5</h1>
      <p>
        hi my name is xyz and my hobby is : click here to edit Me!
      </p>
      <p>
        in jsx attribute we can set attribute like this. Use camelCase for jsx
        attribute
      </p>
      <p>how to add image using jsx attribute</p>
      <img src={camaraicon} alt="camaraicon" />
      <hr/>
    </React.Fragment>
  );
}
export { Component5 };
