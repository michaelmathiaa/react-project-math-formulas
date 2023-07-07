import React, { useState, useEffect } from 'react';

function PhilosopherList() {
  const [philosophers, setPhilosophers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/philosophers')
      .then((r) => r.json())
      .then((data) => setPhilosophers(data));
  }, []);

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
    </div>
  );
}

export default PhilosopherList;
