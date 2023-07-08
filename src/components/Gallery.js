import "../styles/Gallery.css";
import socrates from "../images/socrates.jpg";
import plato from "../images/plato.jpg";
import aristotle from "../images/aristotle.jpg";
import johnLocke from "../images/john-locke.jpg";
import thomasAquinas from "../images/thomas-aquinas.jpg";
import avicenna from "../images/avicenna.jpg";
import karlMarx from "../images/karl-marx.jpg";
import immanuelKant from "../images/immanuel-kant.jpg";
import averroes from "../images/averroes.jpg";
import reneDescartes from "../images/rene-descartes.jpg";

function Gallery() {
  return (
    <div>
      <img src={socrates} alt="Socrates"></img>
      <img src={plato} alt="Plato"></img>
      <img src={aristotle} alt="Aristotle"></img>
      <img src={johnLocke} alt="John Locke"></img>
      <img src={thomasAquinas} alt="Thomas Aquinas"></img>
      <img src={avicenna} alt="Avicenna"></img>
      <img src={karlMarx} alt="Karl Marx"></img>
      <img src={immanuelKant} alt="Immanuel Kant"></img>
      <img src={averroes} alt="Averroes"></img>
      <img src={reneDescartes} alt="Rene Descartes"></img>
    </div>
  )
}

export default Gallery;
