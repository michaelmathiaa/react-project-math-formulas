import React from 'react';
import "../styles/Home.css";
import homePageImage from "../images/home-page-image.jpg";

function Home() {
  return (
    <div>
      <section>
        <h1>Cognitive Corner</h1>
        <p>Journey through the minds of the great philosophers who shaped our thoughts and way we think today.
          <br></br>From Plato to Jacques Derrida, I hope you find the information you are searching for and more! Enlighten yourself!
          <br></br>
        </p>
        <img src={homePageImage} alt="Socrates" className='homeImage'></img>
        <h2>Explore the ideas and philosophies that shaped our world</h2>
        <p>The information you will find here are </p>
      </section>
      <section>
        <h4>Recommended Readings</h4>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
