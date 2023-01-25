import React, { useState } from "react";

import HeaderImg from "../../assets/HeaderImg.png";
import Seaerchbar from "../searchbar/Searchbar";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="header">
      <img className="header-img" src={HeaderImg} alt="header-img" />
      <div className="header-elements">
        <div className="header-elements-header">MOJA KLOPICA</div>
        <div className="header-elements-text">
          Lorem ipsum dolor sit amet, consectetuer adipiscing.
        </div>
        <Seaerchbar
          value={search}
          onChange={setSearch}
          submit={(e) => {
            e.preventDefault();
            console.log(search, "submit, dok se ne iplementira do kraja");
          }}
        />
      </div>
    </div>
  );
};

export default Header;
