import React, { useState } from "react";
import Modal from "react-modal";

function Login({ restartCounter }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  function openModal() {
    sessionStorage.clear();
    setModalIsOpen(true);
  }

  const handle = () => {
    sessionStorage.setItem("player1", player1);
    sessionStorage.setItem("player2", player2);
    setModalIsOpen(false);
  };

  return (
    <>
      <Modal isOpen={modalIsOpen} className="modal">
        <form>
          <div>
            <p className="nplayer" style={{ color: "black" }}>
              Name Player1
            </p>
            <input
              value={player1}
              onChange={(e) => setPlayer1(e.target.value)}
              className="inp"
              type="text"
            />
            <p className="nplayer" style={{ color: "black" }}>
              Name Player2
            </p>
            <input
              value={player2}
              onChange={(e) => setPlayer2(e.target.value)}
              className="inp"
              type="text"
            />
          </div>
          <br></br>
          <button
            className="btn1"
            onClick={() => (handle(), restartCounter())}
            disabled={player1 === "" || player2 === ""}
          >
            Submit
          </button>
        </form>
      </Modal>

      <br></br>
      <button className="button" onClick={openModal}>
        Start new game
      </button>
    </>
  );
}

export default Login;
