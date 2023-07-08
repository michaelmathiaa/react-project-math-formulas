import React, { useState, useEffect } from 'react';
import "../styles/PhilosopherList.css";
import AddPhilosopher from './AddPhilosopher';

function PhilosopherList() {
  const [philosophers, setPhilosophers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/philosophers')
      .then((r) => r.json())
      .then((data) => setPhilosophers(data));
  }, []);

  const filteredPhilosophers = philosophers.filter((philosopher) =>
    philosopher.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleAddPhilosopher(newPhilosopher) {
    setPhilosophers([...philosophers, newPhilosopher]);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search philosophers"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='search'
      />
      <div className='philosopher-list'>
        {filteredPhilosophers.map((philosopher) => (
          <div key={philosopher.id} className='philosopher-card'>
            <h2>{philosopher.name}</h2>
            <p>Birth Year: {philosopher.birthYear} Death Year: {philosopher.deathYear}</p>
            <p>{philosopher.description}</p>
          </div>
        ))}
      </div>
      <AddPhilosopher onAddPhilosopher={handleAddPhilosopher} />
    </div>
  );
}

export default PhilosopherList;
