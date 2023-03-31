import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";
import "../styles/PageLayout.css";

export const Page2 = ({ pseudo, page, updatePage }) => {
  return (
    <div className="page">
      <h2>Bienvenue {pseudo} pour le début de l'histoire</h2>
      <div className="arrow-menu">
        <img src={arrowLeft} alt="flècheGauche" className="arrow-left-shadow" />
        <img
          src={arrowRight}
          alt="flècheDroite"
          className="arrow-right"
          onClick={() => updatePage(page + 1)}
        />
      </div>
    </div>
  );
};
