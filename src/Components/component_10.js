import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "../actions/action";
function UseState() {
  const myState = useSelector((state) => state.changeCounter);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <div className="container text-center bg-light border">
        <h1 className="display-6">
          Increment counter and Decrement Counter : Using{" "}
          <strong className="text-danger">Redux</strong>
        </h1>
        <h1 className="bg-dark text-light text">{myState} </h1>
        <button
          className="btn btn-dark m-1"
          onClick={() => dispatch(decrementCounter())}
        >
          Decrement(-)
        </button>
        <button
          className="btn btn-danger m-1"
          onClick={() => dispatch(incrementCounter())}
        >
          Increment(+)
        </button>
        <button
          className="btn btn-warning m-1"
          onClick={() => dispatch(resetCounter())}
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
