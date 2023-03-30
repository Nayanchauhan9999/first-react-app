import React, { useState } from "react";

const Calculator = () => {
  const operatorList = "+ - / % * .";
  const [state, setState] = useState([]);
  const handleClick = (e) => {
    const value = e.target.value;

    setState((preVal) => {
      return [...preVal, value].join("");
    });
  };
  const calculate = () => {
    const answer = eval(state);
    setState(answer.toString());
  };
  const handleChange = () => {};
  const allClear = () => {
    setState("");
  };
  const clearLastText = () => {
    const inputArr = Array.from(state);
    inputArr.pop();
    const convertString = inputArr.join("");
    setState(convertString);
  };
  return (
    <>
      <div className="container-fluid bg-dark text-center main-calc-div">
        <div className="container cal-content-div">
          <input
            type="text"
            className="output-display"
            value={state}
            onChange={handleChange}
            readOnly
          />
          <div className="container btn-row">
            <button className="allbuttons" onClick={allClear}>
              AC
            </button>
            <button className="allbuttons" onClick={clearLastText}>
              C
            </button>
            <button className="allbuttons" onClick={handleClick} value="%">
              %
            </button>
            <button className="allbuttons" onClick={handleClick} value="/">
              /
            </button>
          </div>
          <div className="container btn-row">
            <button className="allbuttons" onClick={handleClick} value="7">
              7
            </button>
            <button className="allbuttons" onClick={handleClick} value="8">
              8
            </button>
            <button className="allbuttons" onClick={handleClick} value="9">
              9
            </button>
            <button className="allbuttons" onClick={handleClick} value="*">
              *
            </button>
          </div>
          <div className="container btn-row">
            <button className="allbuttons" onClick={handleClick} value="4">
              4
            </button>
            <button className="allbuttons" onClick={handleClick} value="5">
              5
            </button>
            <button className="allbuttons" onClick={handleClick} value="6">
              6
            </button>
            <button className="allbuttons" onClick={handleClick} value="-">
              -
            </button>
          </div>
          <div className="container btn-row">
            <button className="allbuttons" onClick={handleClick} value="1">
              1
            </button>
            <button className="allbuttons" onClick={handleClick} value="2">
              2
            </button>
            <button className="allbuttons" onClick={handleClick} value="3">
              3
            </button>
            <button className="allbuttons" onClick={handleClick} value="+">
              +
            </button>
          </div>
          <div className="container btn-row">
            <button className="allbuttons" onClick={handleClick} value="00">
              00
            </button>
            <button className="allbuttons" onClick={handleClick} value="0">
              0
            </button>
            <button className="allbuttons" onClick={handleClick} value=".">
              .
            </button>
            <button className="allbuttons" onClick={calculate} value="=">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
