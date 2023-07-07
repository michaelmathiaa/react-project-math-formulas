import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
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
                to="/add"
                exact
            >
                Add Philosopher
            </NavLink>
        </div>
    );
};

export default NavBar;
