import React from "react";

import { Tik } from "../../assets/svg";

const SuccessfulSinup = ({ closeModal }) => {
  return (
    <div onClick={closeModal} className="success-res">
      <div
        onClick={(e) => e.stopPropagation()}
        className="success-res-container"
      >
        <div className="success-res-container-tik">
          <Tik />
        </div>
        <div className="success-res-container-text">Uspešna rezervacija</div>
        <button onClick={closeModal} className="success-res-container-button">
          Rezerviši ponovo
        </button>
      </div>
    </div>
  );
};

export default SuccessfulSinup;
