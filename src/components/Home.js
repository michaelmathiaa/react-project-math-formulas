import React from 'react';
import "../styles/Home.css";
import homePageImage from "../images/home-page-image.jpg";

function Home() {
  return (
    <div>
      <section>
        <h1>Journey Through the Minds of Great Philosophers</h1>
        <p>Learn about the influential philosopher's who shaped our thoughts and the way we think today.
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
