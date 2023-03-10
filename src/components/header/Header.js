import React, { useState } from "react";

import HeaderImg from "../../assets/HeaderImg.png";
import CreateAcc from "../createAcc/CreateAcc";
import Login from "../login/Login";
import SuccessfulSinup from "../successfulSingup/SuccessfulSinup";
import ForgetPassword from "../forgetPassword/ForgetPassword";
import ForgetPasswordNotificition from "../forgetPasswordNotification/ForgetPasswordNotification";
import { useQuery } from "react-query";

const Header = () => {
  const [showModal, setShowModal] = useState("");
  const { data: user } = useQuery("userLogin");

  return (
    <div className="header">
      <img className="header-img" src={HeaderImg} alt="header-img" />
      {showModal === "CreateAcc" && (
        <CreateAcc
          setShowModal={setShowModal}
          closeModal={() => setShowModal("")}
        />
      )}
      {showModal === "successSingup" && (
        <SuccessfulSinup closeModal={() => setShowModal("")} />
      )}
      {showModal === "Login" && (
        <Login
          setShowModal={setShowModal}
          closeModal={() => setShowModal("")}
        />
      )}
      {showModal === "ForgetPassword" && (
        <ForgetPassword
          setShowModal={setShowModal}
          closeModal={() => setShowModal("")}
        />
      )}

      {showModal === "ForgetPasswordNotification" && (
        <ForgetPasswordNotificition closeModal={() => setShowModal("")} />
      )}
      <div className="header-elements">
        <div className="header-elements-header">MOJA KLOPICA</div>
        <div className="header-elements-text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing.
        </div>
        {!user && (
          <div className="header-elements-buttons">
            <button
              className="header-elements-buttons-style"
              onClick={() => setShowModal("CreateAcc")}
            >
              Registruj se
            </button>
            <button
              onClick={() => setShowModal("Login")}
              className="header-elements-buttons-style"
            >
              Uloguj se
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
