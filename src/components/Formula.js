import React from "react";
import "../styles/Formula.css";

function Formula({ formula }) {
    return (
        <li className="formula">
          <span>{formula.name}</span>
          <span className="category">{formula.category}</span>
          <img src={formula.image}></img>
        </li>
    );
}

export default Formula;
