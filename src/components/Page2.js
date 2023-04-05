import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";
import "../styles/PageLayout.css";

export const Page2 = ({ pseudo, page, updatePage }) => {
  return (
    <div className="page">
      <h2>
        {">"} Bienvenue <span style={{ fontSize: "120%" }}>{pseudo}</span> !
      </h2>
      <p className="text">
        Tu émerges de ton sommeil dans un lit étriqué bien que toutefois
        confortable. Le soleil perce timidement à travers la seule fenêtre de la
        pièce et tu réalises alors que personne n'est venu te réveiller. En
        sortant de ton hammeau tu remarques que tout le village est animé plus
        qu'à l'accoutumé. Quelquechose ne va pas.
      </p>
      <p className="text">
        Un homme bourru s'approche de toi et t'aggripe aux épaules : "{pseudo}!
        c'est ta soeur! elle a disparue, on ne l'a pas revu depuis son départ
        dans la vallée hier soir!"
      </p>
      <p className="text">
        Tu décides de partir à sa recherche en longeant le vieux sentier.
        L'aventure commence.
      </p>
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
