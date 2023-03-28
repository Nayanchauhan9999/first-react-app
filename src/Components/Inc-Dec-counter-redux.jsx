import React from "react";

const ChangeCounter = () => {
  return (
    <>
      <div className="container">
        <h1>0</h1>
        <button className="btn btn-sm btn-outline-primary">Decrement</button>
        <button className="btn btn-sm btn-outline-primary">Reset</button>
        <button className="btn btn-sm btn-outline-primary">Increment</button>
      </div>
    </>
  );
};

export default ChangeCounter;
