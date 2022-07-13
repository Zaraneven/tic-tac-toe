import { useEffect, useState } from "react";
import tictactoe from "../assets/tictactoe.png";

const Header = ({ countA, countB, countC, ply1, ply2}) => {


  return (
    <header>
      <div className="img">
        <img src={tictactoe} alt="Logo" style={{ width: 100, height: 100 }} />
      </div>
      <div className="left">
        <h2>Tic Tac Toe</h2>
      </div>
      <div className="right">
        <h2>
          {ply1} : {countA}
        </h2>
        <h2>
          {ply2} :{countB}
        </h2>
        <h2>Draw : {countC} </h2>
      </div>
    </header>
  );
  } 

export default Header;
