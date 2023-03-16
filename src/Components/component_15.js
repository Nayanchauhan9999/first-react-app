import React, { useState } from "react";

export default function Component15() {
  let x = "Nayan Chauhan";
  const [one, oneSet] = useState("");
  const [second, secondSet] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");
  function onsubmit(event) {
    event.preventDefault();
    setThird(one);
    setFourth(second);
  }
  function firstOnchange(event) {
    oneSet(event.target.value);
  }
  function secondOnchange(event) {
    secondSet(event.target.value);
  }
  return (
    <React.Fragment>
      <h1>Print Name with submit Form : Component 15</h1>
      <h1 className="text-primary">
        Hello,{" "}
        <span className="text-danger">
          {" "}
          {third} {fourth}
        </span>{" "}
        have a cool day
      </h1>
      <form onSubmit={onsubmit} autoComplete="on">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            First Name
          </span>
          <label htmlFor="fname"></label>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            aria-describedby="basic-addon1"
            onChange={firstOnchange}
            value={one}
            id="fname"
          />
        </div>

        <div className="input-group mb-3">
          <label htmlFor="lname"></label>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            aria-describedby="basic-addon2"
            onChange={secondOnchange}
            value={second}
            id="lname"
          />
          <span className="input-group-text" id="basic-addon2">
            Last Name
          </span>
        </div>
        <button className="btn btn-danger">Submit</button>
      </form>
    </React.Fragment>
  );
}
