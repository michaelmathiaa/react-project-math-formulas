import React, { useState } from 'react';

function AddPhilosopher() {
  const [name, setName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [deathYear, setDeathYear] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPhilosopher = {
      name,
      birthYear: parseInt(birthYear),
      deathYear: parseInt(deathYear),
      description
    };

    fetch('http://localhost:4000/philosophers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPhilosopher),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log('New philosopher added:', data);
        setName('');
        setBirthYear('');
        setDeathYear('');
        setDescription('');
      });
  };

  return (
    <div>
      <h2>Add Philosopher</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Birth Year:</label>
          <input type="number" value={birthYear} onChange={(e) => setBirthYear(e.target.value)} />
        </div>
        <div>
          <label>Death Year:</label>
          <input type="number" value={deathYear} onChange={(e) => setDeathYear(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddPhilosopher;
