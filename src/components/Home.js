import React from 'react';
import "../styles/Home.css";
import homePageImage from "../images/home-page-image.jpg";

function Home() {
  return (
    <div>
      <header>
        <h1>Cognitive Corner</h1>
      </header>
      <main>
        <p>Find out more about the great philosophers who shaped our thoughts and way we think today.
          <br></br>From Plato to Avicenna, I hope you find the information you are searching for and more! Enlighten yourself!
        </p>
        <img src={homePageImage} alt="Socrates" className='home-image'></img>
        <p>This is a growing archive so please feel free to add as many philosopher's to the list. The minus sign in the philosopher's
          <br></br>birth year and death year indicates BCE 'Before Common Era' and the absence of it indicates CE 'Common Era'.
        </p>
      </main>
      <footer>
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
      </footer>
    </div>
  );
}

export default Home;
