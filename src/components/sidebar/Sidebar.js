import React from "react";
import { Link } from "react-router-dom";

import { ABOUT_RESTOURANT } from "../../constants/paths";

const Sidebar = ({ setShowComponent, onBackdropClick }) => {
  console.log(setShowComponent);
  return (
    <div className="sidebar">
      <div className="sidebar-open">
        <ul>
          <li className="sidebar-open-element">
            <a href="/">POČETNA</a>
          </li>
          <li className="sidebar-open-element">
            <a
              onClick={() => setShowComponent("aboutRestourant")}
              href={`${ABOUT_RESTOURANT}/:id`}
            >
              O RESTORANU
            </a>
          </li>
          <li className="sidebar-open-element">
            <a
              onClick={(e) => {
                setShowComponent("meni");
                e.preventDefault();
              }}
            >
              <Link to={`${ABOUT_RESTOURANT}/:id/meni`}></Link>
              MENI
            </a>
          </li>
          <li className="sidebar-open-element">
            <a
              onClick={(e) => {
                setShowComponent("impressions");
                e.preventDefault();
              }}
              href={`${ABOUT_RESTOURANT}/:id`}
            >
              UTISCI
            </a>
          </li>
          <li className="sidebar-open-element">
            <a
              onClick={(e) => {
                setShowComponent("galery");
                e.preventDefault();
              }}
              href={`${ABOUT_RESTOURANT}/:id`}
            >
              GALERIJA
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar-close" onClick={onBackdropClick} />
    </div>
  );
};

export default Sidebar;
