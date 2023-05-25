import React, { useState } from "react";
import ReactDom from "react-dom";
import "./index.css";

const Square = (props) => {
  const [value, setValue] = useState(null);
  return (
    <button className="square" onClick={() => setValue("X")}>
      {value}
    </button>
  );
};
const Board = () => {
  const RenderSquare = (i) => {
    return <Square />;
  };
  return (
    <div style={{ backgroundColor: "skyblue", margin: 10, padding: 20 }}>
      Board
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
        Game
        <Board />
      </div>
    </>
  );
};

ReactDom.render(<Game />, document.getElementById("root"));
