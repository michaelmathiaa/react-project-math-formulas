import React from "react";
import { NavLink } from "react-router-dom/";
import "../styles/NavBar.css"

function NavBar() {
    return (
        <div className="NavBar">
            <NavLink
                to="/"
                exact
                className="NavBarLink"
            >
                Home
            </NavLink>
            <NavLink
                to="/algebra"
                exact
                className="NavBarLink"
            >
                Algebra
            </NavLink>
            <NavLink
                to="/geometry"
                exact
                className="NavBarLink"
            >
                Geometry
            </NavLink>
            <NavLink
                to="/physics"
                exact
                className="NavBarLink"
            >
                Physics
            </NavLink>
        </div>
    )
}

export default NavBar;
