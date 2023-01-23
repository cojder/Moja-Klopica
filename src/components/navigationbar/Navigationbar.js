import React from "react";

import logo from "../../assets/Logo.png";

const Navigationbar = ({ showSidbar }) => {
  return (
    <>
      <div className="first">
        <div className="menue" onClick={showSidbar}>
          <div className="menue-style"></div>
        </div>
        <div className="Navigationbar">
          <img className="Navigationbar-logo" src={logo} alt="logo" />
          <div className="Navigationbar-text">
            <h5 className="Navigationbar-text-1">Saznaj gde je najbliža </h5>
            <h5 className="Navigationbar-text-2"> TVOJA KLOPICA</h5>
          </div>
          <button className="Navigationbar-login-button">Ulogujte se</button>
        </div>
      </div>
    </>
  );
};

export default Navigationbar;
