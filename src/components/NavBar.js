import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
    return (
        <div className="NavBar">
            <NavLink
                to="/"
                exact
            >
                Home
            </NavLink>
            <NavLink
                to="/philosophers"
                exact
            >
                Philosophers
            </NavLink>
            <NavLink
                to="/gallery"
                exact
            >
                Gallery
            </NavLink>
        </div>
    );
};

export default NavBar;
