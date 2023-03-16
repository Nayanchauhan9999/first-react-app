import React, { useState } from 'react';

export default function Component14() {
  const [name, setName] = useState("")
  const [state, setState] = useState()
  const submit = ()=>{
    setState(name)
  }
  function onchange(event){
    setName(event.target.value)
  }

  return (
    <React.Fragment>
      <h1>Print Your name By entering Below input : component 14</h1>
      <h1 className="text-primary">
        Hello, <span className="text-danger"> {state} </span>
        Have a nice day.
      </h1>
      <label htmlFor="exampleFormControlInput1" className="form-label"></label>
      <input
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="Enter your Name"
        onChange={onchange}
        value={name}
      ></input>
      <button className="btn btn-primary m-3" onClick={submit}>Submit</button>
      <hr />
    </React.Fragment>
  );
}
