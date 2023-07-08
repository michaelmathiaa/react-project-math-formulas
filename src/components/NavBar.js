import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <NavLink
        to="/"
        exact
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/philosophers"
        exact
        className="nav-link"
      >
        Philosophers
      </NavLink>
      <NavLink
        to="/gallery"
        exact
        className="nav-link"
      >
        Gallery
      </NavLink>
    </div>
  );
};

export default NavBar;
