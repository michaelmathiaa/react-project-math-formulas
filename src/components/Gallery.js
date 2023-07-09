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
  const philosopherImages = [socrates, plato, aristotle, johnLocke, thomasAquinas, avicenna, karlMarx, immanuelKant, averroes, reneDescartes];

  return (
    <div>
      {philosopherImages.map((philosopherImage) => <img src={philosopherImage} alt={philosopherImage} key={philosopherImage}></img>)}
    </div>
  )
}

export default Gallery;
