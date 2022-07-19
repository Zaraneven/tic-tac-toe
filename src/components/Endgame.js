import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const Endgame = ({ winner, mod, restart }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (winner) {
      setTimeout(() => {
        setOpen(true);
      }, 1000);
    }
  }, [winner]);

  function close() {
    setOpen(false);
  }

  return (
    <div>
      <Modal isOpen={open} className="mdl">
        <div>
          <h2 className="msg" style={{ color: "black" }}>
            Winner : {mod}
          </h2>
        </div>
        <div>
          <button className="btn" onClick={() => (restart(), close())}>
            Wanna Try Again
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Endgame;
