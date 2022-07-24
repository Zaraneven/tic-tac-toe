import React, { useEffect, useState } from "react";
import Board from "./Board.js";
import Header from "./Header.js";
import { calculateWinner } from "./Board.js";
import Endgame from "./Endgame.js";
import Login from "./Login.js";
import History from "./History.js";

const Game = () => {
  var ply1 = localStorage.getItem("player1");
  var ply2 = localStorage.getItem("player2");
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [countC, setCountC] = useState(0);
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState("");

  const handleClickEvent = (i) => {
    const newSquares = [...squares];
    const winnerDeclared = Boolean(calculateWinner(newSquares));
    const squareFilled = Boolean(newSquares[i]);
    if (squareFilled) {
      setMsg("bb");
    } else if (!squareFilled) {
      setMsg("");
    }
    if (winnerDeclared || squareFilled) {
      return;
    }
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const winner = calculateWinner(squares);
  useEffect(() => {
    if (winner === "X") {
      setStatus("winner: " + ply1);
    } else if (winner === "O") {
      setStatus("Winner: " + ply2);
    } else if (winner) {
      setStatus("It is a draw");
    } else if (msg) {
      setStatus("Choose unoccupied cell");
    } else {
      setStatus("Next player: " + (xIsNext ? ply1 : ply2));
    }
  });

  let mod;
  if (winner === "X") {
    mod = ply1;
  } else if (winner === "O") {
    mod = ply2;
  } else if (winner) {
    mod = "Draw !!!";
  }

  const restart = () => {
    setSquares(initialSquares);
    setXIsNext(true);
  };

  useEffect(() => {
    if (winner === "X") {
      setCountA((countA) => countA + 1);
    } else if (winner === "O") {
      setCountB((countB) => countB + 1);
    } else if (winner) {
      setCountC((countC) => countC + 1);
    }
  }, [winner]);

  function restartCounter() {
    setCountA(0);
    setCountB(0);
    setCountC(0);
  }

  return (
    <div className="game">
      <Header
        ply1={ply1}
        ply2={ply2}
        countA={countA}
        countB={countB}
        countC={countC}
      />

      <Board
        ply1={ply1}
        ply2={ply2}
        status={status}
        msg={msg}
        handleClickEvent={handleClickEvent}
        winner={winner}
        squares={squares}
      />

      <div className="show">
        <Login restart={restart} restartCounter={restartCounter} />
      </div>
      <Endgame winner={winner} mod={mod} restart={restart} />
      <History winner={winner} ply1={ply1} ply2={ply2} mod={mod} />
    </div>
  );
};

export default Game;
