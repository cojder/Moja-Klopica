import React from "react";

import SearchbarLeft from "../../assets/SearchbarLeft.png";
import SearchbarRight from "../../assets/SearchbarRight.png";

const Searchbar = ({ value, onChange, submit }) => {
  return (
    <form onSubmit={(e) => submit(e)} className="searchbar">
      <div className="searchbar-field">
        <img
          src={SearchbarLeft}
          alt="location"
          className="searchbar-field-icon-left"
        />
        <input
          id="search"
          type="text"
          placeholder="Unesi adresu na kojoj se nalaziš"
          className="searchbar-field-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <img
          src={SearchbarRight}
          alt="icon"
          className="searchbar-field-icon-right"
          onClick={(e) => submit(e)}
        />
      </div>
    </form>
  );
};

export default Searchbar;
