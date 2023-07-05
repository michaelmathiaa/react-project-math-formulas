import React, { useEffect, useState } from "react";
import Formula from "./Formula";

function Home() {
    const [formulas, setFormulas] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        fetch("http://localhost:4000/formulas")
          .then((r) => r.json())
          .then((formulas) => setFormulas(formulas));
    },  []);

    const formulasToDisplay = formulas.filter((formula) => {
        if (selectedCategory === "All") return true;

        return formula.category === selectedCategory;
    });
    
    return (
        <div>
            <ul>
                {formulasToDisplay.map((formula) => (
                    <Formula key={formula.id} formula={formula}/>
                ))}
            </ul>
        </div>
    )
}

export default Home;
