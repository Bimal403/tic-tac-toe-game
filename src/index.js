import React, { useState } from "react";
import ReactDom from "react-dom";
import "./index.css";

const Square = (props) => {
  const [value, setValue] = useState(null);
  return (
    <button className="square" onClick={props.onCLickEvent}>
      {props.value}
    </button>
  );
};
const Board = () => {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);
  const handleClickEvent = (i) => {
    const newSquares = [...squares];

    const winnerDeclared = Boolean(calculateWinner(newSquares));
    const squareFilled = Boolean(newSquares[i]);
    if (winnerDeclared || squareFilled) {
      return;
    }
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };
  const RenderSquare = (i) => {
    return (
      <Square value={squares[i]} onCLickEvent={() => handleClickEvent(i)} />
    );
  };

  const winner = calculateWinner(squares);
  const status = winner ? "winner" : xIsNext ? "X" : "O";
  return (
    <div>
      <div className="status"> {status}</div>
      <div className="board-row">
        {RenderSquare(0)}
        {RenderSquare(1)}
        {RenderSquare(2)}
      </div>
      <div className="board-row">
        {" "}
        {RenderSquare(3)}
        {RenderSquare(4)}
        {RenderSquare(5)}
      </div>
      <div className="board-row">
        {RenderSquare(6)}
        {RenderSquare(7)}
        {RenderSquare(8)}
      </div>
    </div>
  );
};
const Game = () => {
  return (
    <>
      <div className="game">
        TIC-TAC-TOE
        <Board />
      </div>
    </>
  );
};

ReactDom.render(<Game />, document.getElementById("root"));
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
