import React from "react";

function UseState() {
  return (
    <React.Fragment>
      <div className="container text-center bg-light border">
        <h1 className="display-6">
          Increment counter and Decrement Counter : Using
          <strong className="text-danger">Redux</strong>
        </h1>
        <h1 className="bg-dark text-light text">{0} </h1>
        <button
          className="btn btn-dark m-1"
        >
          Decrement(-)
        </button>
        <button
          className="btn btn-danger m-1"
        >
          Increment(+)
        </button>
        <button
          className="btn btn-warning m-1"
        >
          Reset
        </button>
      </div>
      {/* <div className="container mt-5 bg-light border">
        <h2 className="display-6">How to Create Store In Redux?</h2>
      </div> */}
    </React.Fragment>
  );
}
export { UseState };
