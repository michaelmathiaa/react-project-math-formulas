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
      <div>
        {philosophers.map((philosopher) => (
          <div key={philosopher.id} className='philosopherCard'>
            <h3>{philosopher.name}</h3>
            <div>Birth Year: {philosopher.birthYear} Death Year: {philosopher.deathYear}</div>
            <div>{philosopher.description}</div>
          </div>
        ))}
      </div>
      <AddPhilosopher onAddPhilosopher={handleAddPhilosopher} />
    </div>
  );
}

export default PhilosopherList;
