import React from "react";
// import { useQuery } from "react-query";

import { Tik } from "../../assets/svg";

const Email = "eamol@mail.com";

const SuccessfulSinup = ({ closeModal }) => {
  // const { data: user } = useQuery("user");

  return (
    <div onClick={closeModal} className="success">
      <div onClick={(e) => e.stopPropagation()} className="success-container">
        <div className="success-container-tik">
          <Tik />
        </div>
        <div className="success-container-text">
          Poslat je verifikacioni email na {Email} Neophodno je verifikovati
          nalog kako bi se registracija zavrsila.
        </div>
        <button onClick={closeModal} className="success-container-button">
          zatvori
        </button>
      </div>
    </div>
  );
};

export default SuccessfulSinup;
