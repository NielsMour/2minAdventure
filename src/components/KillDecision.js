import { PageScroller } from "./PageScroller";

import backgroundLife from "../assets/background/life.jpg";
import backgroundDeath from "../assets/background/death-bw.jpg";
import "../styles/PageLayout.css";

export const KillDecision = ({
  page,
  updatePage,
  isKilled,
  updateIsKilled,
}) => {
  function switchKilled(arg) {
    switch (arg) {
      case "killed":
        document.body.style.backgroundImage = `url(${backgroundDeath})`;
        return (
          <div className="page">
            <h2>Vous l'avez tué</h2>
            <PageScroller page={page} updatePage={updatePage} />
          </div>
        );
      case "notKilled":
        document.body.style.backgroundImage = `url(${backgroundLife})`;
        return (
          <div className="page">
            <h2>Vous l'avez épargné</h2>
            <PageScroller page={page} updatePage={updatePage} />
          </div>
        );
      default:
        return (
          <div className="page">
            <h3>Voulez vous tuer l'ennemi?</h3>
            <button onClick={() => updateIsKilled("killed")}>Oui</button>
            <button onClick={() => updateIsKilled("notKilled")}>Non</button>
          </div>
        );
    }
  }
  return switchKilled(isKilled);
};
