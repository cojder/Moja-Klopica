import React from "react";

import {
  ABOUT_RESTOURANT,
  GALERY,
  IMPRESSIONS,
  MENI,
} from "../../constants/paths";

const Sidebar = ({ onBackdropClick }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-open">
        <ul>
          <li className="sidebar-open-element">
            <a href="/">POČETNA</a>
          </li>
          <li className="sidebar-open-element">
            <a href={`${ABOUT_RESTOURANT}/:id`}>O RESTORANU</a>
          </li>
          <li className="sidebar-open-element">
            <a href={`${MENI}/:id`}>MENI</a>
          </li>
          <li className="sidebar-open-element">
            <a href={`${IMPRESSIONS}/:id`}>UTISCI</a>
          </li>
          <li className="sidebar-open-element">
            <a href={`${GALERY}/:id`}>GALERIJA</a>
          </li>
        </ul>
      </div>
      <div className="sidebar-close" onClick={onBackdropClick} />
    </div>
  );
};

export default Sidebar;
