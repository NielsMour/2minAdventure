import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";

import "../styles/PageLayout.css";

export const PageScroller = ({ page, updatePage }) => {
  return (
    <div className="arrow-menu">
      <img
        src={arrowLeft}
        alt="flècheGauche"
        className="arrow-left"
        onClick={() => updatePage(page - 1)}
      />
      <img
        src={arrowRight}
        alt="flècheDroite"
        className="arrow-right"
        onClick={() => updatePage(page + 1)}
      />
    </div>
  );
};
