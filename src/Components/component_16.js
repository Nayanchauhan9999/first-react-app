import React, { useState } from "react";

function Component16() {
  const [name, setName] = useState({
    fname: "",
    lname: "",
  });
  function onSubmit(event) {
    event.preventDefault();
    alert("form Submitted");
  }
  function onchange(event) {
    console.log(event.target.value);
    console.log(event.target.name);

    let value = event.target.value;
    let name = event.target.name;

    setName((preValue) => {
      console.log(preValue.lname)
      if (name === "first-Name") {
        return { fname: value, lname: preValue.lname };
      }else if (name === "last-Name") {
        return { fname: preValue.fname, lname: value };
      }
    });
  }
  return (
    <React.Fragment>
      <hr />
      <h1>complex forms (so many inputs) : Component16</h1>
      <h2 className="text-primary">
        hello,{" "}
        <span className="text-danger">
          {name.fname} {name.lname}{" "}
        </span>
        . How are you ?{" "}
      </h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="fname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fname"
            name="first-Name"
            placeholder="First Name"
            onChange={onchange}
            // value={""}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lname"
            name="last-Name"
            placeholder="Last Name"
            onChange={onchange}
            // value={}
          />
        </div>
        <button className="btn btn-success">Submit</button>
      </form>
      <hr/>
    </React.Fragment>
  );
}

export default Component16;
