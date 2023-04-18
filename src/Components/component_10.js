import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../Store/Slices/changeCounter";

function UseState() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.changeCounter;
  });
  return (
    <React.Fragment>
      <div className="container text-center bg-light border">
        <h1 className="display-6">
          Increment counter and Decrement Counter : Using
          <strong className="text-danger"> Redux </strong>
        </h1>
        <h1 className="bg-dark text-light text">{state} </h1>
        <button
          className="btn btn-dark m-1"
          onClick={() => dispatch(decrement())}
        >
          Decrement(-)
        </button>
        <button
          className="btn btn-danger m-1"
          onClick={() => dispatch(increment())}
        >
          Increment(+)
        </button>
        <button
          className="btn btn-warning m-1"
          onClick={() => dispatch(reset())}
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
