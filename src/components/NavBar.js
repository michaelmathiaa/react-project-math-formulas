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
        </div>
    )
}

export default NavBar;
