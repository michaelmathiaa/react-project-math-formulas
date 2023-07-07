import React, { useState, useEffect } from 'react';
import "../styles/PhilosopherList.css";
import AddPhilosopher from './AddPhilosopher';

function PhilosopherList() {
  const [philosophers, setPhilosophers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/philosophers')
      .then((r) => r.json())
      .then((data) => setPhilosophers(data));
  }, []);

  function handleAddPhilosopher(newPhilosopher) {
    setPhilosophers([...philosophers, newPhilosopher]);
  }

  return (
    <div>
      <h2>Philosophers</h2>
      <div>
        {philosophers.map((philosopher) => (
          <div key={philosopher.id}>
            <span>
              {philosopher.name}
            </span>
            <div>{philosopher.description}</div>
          </div>
        ))}
      </div>
      <AddPhilosopher philosophers={philosophers} onAddPhilosopher={handleAddPhilosopher}/>
    </div>
  );
}

export default PhilosopherList;
