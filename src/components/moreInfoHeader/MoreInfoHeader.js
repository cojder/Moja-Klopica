import React from "react";

import Background from "../../assets/HeaderAbouUs.png";

const MoreInfoHeader = () => {
  return (
    <div className="header-info">
      <img className="header-info-img" src={Background} alt="pozadina" />
      <div className="header-info-elements">
        <div className="header-info-elements-header">MOJA KLOPICA</div>
      </div>
    </div>
  );
};

export default MoreInfoHeader;
