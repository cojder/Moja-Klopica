import React from "react";

import { Tik } from "../../assets/svg";

const SuccessfulSinup = ({ closeModal }) => {
  return (
    <div onClick={closeModal} className="success">
      <div onClick={(e) => e.stopPropagation()} className="success-container">
        <div className="success-container-tik">
          <Tik />
        </div>
        <div className="success-container-text">
          Poslat je verifikacioni email na peraperic@gmail.com. Neophodno je
          verifikovati nalog kako bi se registracija zavrsila.
        </div>
        <button onClick={closeModal} className="success-container-button">
          zatvori
        </button>
      </div>
    </div>
  );
};

export default SuccessfulSinup;
