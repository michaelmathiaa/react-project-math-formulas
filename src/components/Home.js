import React from 'react';
import "../styles/Home.css";
import homePageImage from "../images/home-page-image.jpg";

function Home() {
  return (
    <div>
      <section>
        <h1>Cognitive Corner</h1>
        <p>Find out more about the great philosophers who shaped our thoughts and way we think today.
          <br></br>From Plato to Avicenna, I hope you find the information you are searching for and more! Enlighten yourself!
          <br></br>
        </p>
        <img src={homePageImage} alt="Socrates" className='homeImage'></img>
      </section>
      <section>
        <h4>Recommended Readings</h4>
        <p>I encourage you to read more and gain insight from the writings of some of the most influential
          <br></br>philosophers. Below is a list of books I recommend if you would like to learn more.
        </p>
        <ul className='list'>
          <li>
            <a href="https://www.goodreads.com/book/show/30292.Five_Dialogues" 
            className='link'>Five Dialogues: Euthyphro, Apology, Crito, Meno, Phaedo</a>
          </li>
          <li>
            <a href="https://www.goodreads.com/book/show/25709.Summa_Theologica" 
            className='link'>Summa Theologica</a>
          </li>
          <li>
            <a href="https://www.goodreads.com/book/show/208075.The_Metaphysics_of_The_Healing" 
            className='link'>The Metaphysics of The Healing</a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
