import React, { useEffect } from "react";

const History = ({ winner, ply1, ply2, mod }) => {
  useEffect(() => {
    if (winner) {
      var history = {
        day: new Date().getDate(),
        month: new Date().getMonth() + 1,
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        playerOne: ply1,
        playerTwo: ply2,
        won: mod,
      };

      var historyOfGames = JSON.parse(localStorage.getItem("allEntries"));
      if (historyOfGames == null) historyOfGames = [];
      localStorage.setItem("history", JSON.stringify(history));
      historyOfGames.push(history);
      localStorage.setItem("allEntries", JSON.stringify(historyOfGames));
    }
  }, [winner]);

  var retrievedHistory = localStorage.getItem("allEntries");

  if (retrievedHistory != null) {
    const objResul = JSON.parse(retrievedHistory);
    return (
      <div className="hist">
        {objResul.map((value, key) => (
          <ul className="history">
            <li>
              {value.day}
              {"."}
              {value.month} {value.hour}
              {"."}
              {value.minute} {value.playerOne}
              {" vs "}
              {value.playerTwo}
              {" Won: "}
              {value.won}
            </li>
          </ul>
        ))}
      </div>
    );
  } else {
    return (
      <div className="hist">
        <ul className="history">
          <li></li>
        </ul>
      </div>
    );
  }
};

export default History;
