import React from "react";
import { NavLink } from "react-router-dom/";

function NavBar() {
    return (
        <div>
            <NavLink
                to="/"
                exact
            >
                Home
            </NavLink>
            <NavLink
                to="/algebra"
                exact
            >
                Algebra
            </NavLink>
            <NavLink
                to="/geometry"
                exact
            >
                Geometry
            </NavLink>
            <NavLink
                to="/physics"
                exact
            >
                Physics
            </NavLink>
        </div>
    )
}

export default NavBar;
