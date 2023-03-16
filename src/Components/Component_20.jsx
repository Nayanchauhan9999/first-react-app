import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Component20() {
  return (
    <React.Fragment>
      <hr />
      <h2>Accordion : Component 20 </h2>
    </React.Fragment>
  );
}
function Accordion(props) {
  let [state, setState] = useState("none");
  let [icon, setIcon] = useState("rotate(0deg)");
  function expand() {
    if (state === "none") {
      setState("block");
      setIcon("rotate(90deg)");
    }
    if (state === "block") {
      setState("none");
      setIcon("rotate(0deg)");
    }
  }
  return (
    <React.Fragment>
      <div className="border my-1" key={props.srNo}>
        <div
          className="d-flex justify-content-between align-items-center"
          onClick={expand}
          role="button"
        >
          <p className="mb-0 p-2">
            <strong>
              {props.question} #{props.srNo}
            </strong>
          </p>
          <ArrowForwardIosIcon style={{ transform: icon }} />
        </div>
        <p className="p-2" style={{ display: state }}>
          {props.answer}
        </p>
      </div>
    </React.Fragment>
  );
}
export { Component20, Accordion };
