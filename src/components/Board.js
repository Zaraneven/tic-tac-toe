import React, { useState } from "react";

const Square = (props) => {
  return (
    <button className="square" onClick={props.onClickEvent}>
      {props.value}
    </button>
  );
};
const Board = ({ status, squares, handleClickEvent }) => {
  const renSquare = (i) => {
    return (
      <Square value={squares[i]} onClickEvent={() => handleClickEvent(i)} />
    );
  };
  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renSquare(0)}
        {renSquare(1)}
        {renSquare(2)}
      </div>
      <div className="board-row">
        {renSquare(3)}
        {renSquare(4)}
        {renSquare(5)}
      </div>
      <div className="board-row">
        {renSquare(6)}
        {renSquare(7)}
        {renSquare(8)}
      </div>
    </div>
  );
};

export function calculateWinner(squares) {
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

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  if (!squares.includes(null)) {
    return "It is a Draw ";
  }

  return null;
}
export default Board;
