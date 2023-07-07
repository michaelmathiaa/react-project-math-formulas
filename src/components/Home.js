import React from 'react';
import "../styles/Home.css";
import homePageImage from "../images/home-page-image.jpg";

function Home() {
  return (
    <div>
      <section>
        <h1>Journey Through the Minds of Great Philosophers</h1>
        <h3>Explore the ideas and philosophies that shaped our world</h3>
        <img src={homePageImage} alt="Socrates"/>
      </section>
      <section>
        <h2>Recommended Readings</h2>
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
