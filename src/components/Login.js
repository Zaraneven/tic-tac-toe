import React, { useState } from "react";
import Modal from "react-modal";

function Login({ restartCounter, restart }) {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [name, setName] = useState("");

  function openModal() {
    localStorage.clear();
    setModalIsOpen(true);
  }

  const handle = () => {
    localStorage.setItem("player1", player1);
    localStorage.setItem("player2", player2);
    setModalIsOpen(false);
    if (player1 === "" || player2 === "") {
      setName("Please enter players name");
      setModalIsOpen(true);
    }
  };

  return (
    <>
      <Modal isOpen={modalIsOpen} className="modal">
        <form>
          <div id="players">
            <p className="nplayer" style={{ color: "black" }}>
              Name Player1
            </p>
            <input
              value={player1}
              onChange={(e) => setPlayer1(e.target.value)}
              className="inp"
              type="text"
            />
            <p className="validation">{name}</p>
            <p className="nplayer" style={{ color: "black" }}>
              Name Player2
            </p>
            <input
              value={player2}
              onChange={(e) => setPlayer2(e.target.value)}
              className="inp"
              type="text"
            />
            <p className="validation">{name}</p>
          </div>
          <br></br>
          <button
            type="button"
            className="btn1"
            onClick={() => (handle(), restartCounter(), restart())}
          >
            Submit
          </button>
        </form>
      </Modal>
      <br></br>
      <button type="button" className="button" onClick={openModal}>
        Start new game
      </button>
    </>
  );
}

export default Login;
