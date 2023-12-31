import React, { useState } from 'react';
import "../styles/AddPhilosopher.css";

function AddPhilosopher({ onAddPhilosopher }) {
  const [name, setName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [deathYear, setDeathYear] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const philosopherData = {
      name: name,
      birthYear: parseInt(birthYear),
      deathYear: parseInt(deathYear),
      description: description,
    };
  
    fetch('http://localhost:4000/philosophers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(philosopherData),
    })
      .then((r) => r.json())
      .then((newPhilosopher) => {
        onAddPhilosopher(newPhilosopher);
        setName('');
        setBirthYear('');
        setDeathYear('');
        setDescription('');
      });
  };
  
  return (
    <div className='add-div'>
      <h1>Add Philosopher</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Birth Year: </label>
          <input type="number" value={birthYear} onChange={(e) => setBirthYear(e.target.value)} />
        </div>
        <div>
          <label>Death Year: </label>
          <input type="number" value={deathYear} onChange={(e) => setDeathYear(e.target.value)} />
        </div>
        <div>
          <label>Description: </label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddPhilosopher;
