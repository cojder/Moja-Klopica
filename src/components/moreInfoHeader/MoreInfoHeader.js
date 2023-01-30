import React from "react";

import Background from "../../assets/BackGroundTop.png";

const MoreInfoHeader = () => {
  return (
    <div className="header">
      <img className="header-img" src={Background} />

      <div className="header-elements">
        <div className="header-elements-header">MOJA KLOPICA</div>
        <div className="header-elements-text">dodatne informacije</div>
      </div>
    </div>
  );
};

export default MoreInfoHeader;
