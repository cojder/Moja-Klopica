import React from "react";

const Sidebar = ({ onBackdropClick }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-open">
        <ul>
          <li className="sidebar-open-element">
            <a href="#">POČETNA</a>
          </li>
          <li className="sidebar-open-element">
            <a href="#">O RESTORANU</a>
          </li>
          <li className="sidebar-open-element">
            <a href="#">MENI</a>
          </li>
          <li className="sidebar-open-element">
            <a href="#">UTISCI</a>
          </li>
          <li className="sidebar-open-element">
            <a href="#">GALERIJA</a>
          </li>
        </ul>
      </div>
      <div className="sidebar-close" onClick={onBackdropClick} />
    </div>
  );
};

export default Sidebar;
