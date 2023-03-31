import { PageScroller } from "./PageScroller";

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
        return (
          <div>
            <h2>Vous l'avez tué</h2>
            <PageScroller page={page} updatePage={updatePage} />
          </div>
        );
      case "notKilled":
        return (
          <div>
            <h2>Vous l'avez épargné</h2>
            <PageScroller page={page} updatePage={updatePage} />
          </div>
        );
      default:
        return (
          <div>
            <h3>Voulez vous tuer l'ennemi?</h3>
            <button onClick={() => updateIsKilled("killed")}>Oui</button>
            <button onClick={() => updateIsKilled("notKilled")}>Non</button>
          </div>
        );
    }
  }
  return switchKilled(isKilled);
};
