import React, { useState } from "react";

const Calculator = () => {
  const [state, setState] = useState([]);
  const handleClick = (e) => {
    const value = e.target.value;
    setState((preVal) => {
      return [...preVal, value].join("");
    });
  };
  const operatorList = ["+", "-", "%", "/", "*", "."];
  const calculate = () => {
    // eslint-disable-next-line
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
  if (state.length === 1 && operatorList.includes(state)) {
    setState([]);
  }
  if (
    operatorList.includes(state.slice(-1)) &&
    operatorList.includes(state.slice(-2, -1))
  ){
      setState(state.slice(0,-1))
  }
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
            <div className="container grid-row-calculator">
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
                &divide;
              </button>
            </div>
            <div className="container grid-row-calculator">
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
                &times;
              </button>
            </div>
            <div className="container grid-row-calculator">
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
                &minus;
              </button>
            </div>
            <div className="container grid-row-calculator">
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
            <div className="container grid-last-raw-calculator">
              <button className="allbuttons" onClick={handleClick} value="0">
                0
              </button>
              <button className="allbuttons" onClick={handleClick} value=".">
                .
              </button>
              <button
                className="allbuttons equal"
                onClick={calculate}
                value="="
              >
                =
              </button>
            </div>
          </div>
        </div>
      </>
    );
};

export default Calculator;
