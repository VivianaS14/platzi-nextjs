import React from "react";

interface Props {
  onClick: () => void;
}

function ModalHeader({ onClick }: Props) {
  return (
    <div className="modalHeader">
      <div className="modalContainer">
        <div className="modalInfo">
          <div>
            <img src="/images/Dead_Fluff.png" alt="Dead Fluff" width={250} />
          </div>
          <div className="modalText">
            <h2>Mataste al Fluff</h2>
            <p>Lo tocaste tanto que lo mataste.</p>
            <p>
              Por otro lado, eres una persona muy curiosa y has descubierto
              esto. :)
            </p>
          </div>
        </div>
        <div className="modalButtons">
          <button onClick={onClick} className="modalBtn cancelButton">
            Ay, lo siento
          </button>
          <button onClick={onClick} className="modalBtn confirmButton">
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalHeader;
