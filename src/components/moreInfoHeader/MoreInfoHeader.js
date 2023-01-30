import React from "react";

import Background from "../../assets/BackGroundTop.png";

const MoreInfoHeader = () => {
  return (
    <div className="header-info">
      <img className="header-info-img" src={Background} />

      <div className="header-info-elements">
        <div className="header-info-elements-header">MOJA KLOPICA</div>
        <div className="header-info-elements-text">dodatne informacije</div>
      </div>
    </div>
  );
};

export default MoreInfoHeader;
