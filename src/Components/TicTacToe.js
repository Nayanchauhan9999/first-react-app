import React, { useState } from "react";

function TicTacToe() {
  //eslint-disable-next-line
  const [value, setValue] = useState(Array(9).fill(null));
  const [xTurn, setXTurn] = useState(true);
  const handleClick = (i) => {
    const newArray = value.slice();
    if (value[i] || winner(value)) {
      return;
    }
    if (xTurn) {
      newArray[i] = "X";
    } else {
      newArray[i] = "O";
    }
    setValue(newArray);
    setXTurn(!xTurn);
  };
  const restartGame = () => {
    setValue(Array(9).fill(null));
  };
  function winner(value) {
    const winingArray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winingArray.length; i++) {
      const [a, b, c] = winingArray[i];
      if (value[a] && value[a] === value[b] && value[a] === value[c]) {
        return value[a];
      }
    }
    return null;
  }
  let gameStatus;
  const declareWinner = winner(value);
  if (declareWinner) {
    gameStatus = "Winner : " + declareWinner;
  } else if(!declareWinner && value.includes(null)) {
    gameStatus = "Next Player" + (xTurn ? ": X" : ": O");
  }else if(!declareWinner && !value.includes(null)){
    gameStatus= "Match Draw"
  }
  return (
    <React.Fragment>
      <div className="container text-center bg-light border rounded">
        <h1 className="bg-dark text-light display-5 mt-3 rounded p-2 mb-3">
          Tic-Tac-Toe
        </h1>
        <div className="playground-tic-tac-toe">
          <button onClick={() => handleClick(0)}>{value[0]}</button>
          <button onClick={() => handleClick(1)}>{value[1]}</button>
          <button onClick={() => handleClick(2)}>{value[2]}</button>
          <button onClick={() => handleClick(3)}>{value[3]}</button>
          <button onClick={() => handleClick(4)}>{value[4]}</button>
          <button onClick={() => handleClick(5)}>{value[5]}</button>
          <button onClick={() => handleClick(6)}>{value[6]}</button>
          <button onClick={() => handleClick(7)}>{value[7]}</button>
          <button onClick={() => handleClick(8)}>{value[8]}</button>
        </div>
        <div className="mb-2 display-6 text-primary">{gameStatus}</div>
        <div className="d-flex justify-content-between mb-3">
          <button className="btn btn-dark btn-sm" disabled={!xTurn}>
            X's turn
          </button>
          <button className="btn btn-dark btn-sm" onClick={restartGame}>
            Restart
          </button>
          <button className="btn btn-dark btn-sm" disabled={xTurn}>
            O's Turn
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}
export { TicTacToe };
