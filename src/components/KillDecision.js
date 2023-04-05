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
          <div className="page">
            <h2>{">"} Meurtre</h2>
            <p className="text">
              Percé par la rage et la peur de ce que cet homme à pu faire à
              votre soeur vous bondissez sur lui. Il ne s'y attends pas, d'un
              coup il trébuche sur le côté. Vous passez les mains autour de son
              cou.
            </p>
            <p className="text">
              Vous serrez. L'homme s'agite doucement sans vraiment se débattre.
            </p>
            <p className="text">
              Il est mort.
              <br /> Vous péntrer alors dans l'étrange caverne, sans un regard
              pour la dépouille que vous laissez.
            </p>
            <PageScroller page={page} updatePage={updatePage} />
          </div>
        );
      case "notKilled":
        return (
          <div className="page">
            <h2>{">"} Délivrance</h2>
            <p className="text">
              Vous partager un regard qui semble porter beaucoup de sens.
              L'homme avance alors vers vous, il n'est pas menaçant et vous
              comprenez qu'il cherche juste à passer son chemin sans plus vous
              attribuer d'attention.
            </p>
            <p className="text">
              Il arrive à votre niveau. En vous frôlant, vous êtes parcouru d'un
              frisson étrange, peut-être partagez vous plus de choses que vous
              n'imaginiez avec cet homme? Peut-être vous ressemble-t-il?
            </p>
            <p className="text">
              Il disparaît silencieusement dans les bois.
              <br /> Vous péntrer alors dans l'étrange caverne, sans un regard
              derrière vous.
            </p>
            <PageScroller page={page} updatePage={updatePage} />
          </div>
        );
      default:
        return (
          <div className="page">
            <h2>{">"} Vous pouvez essayer de tuer cet homme ensanglanté:</h2>
            <button
              className="textBox"
              onClick={() => updateIsKilled("killed")}
            >
              Le tuer
            </button>
            <button
              className="textBox"
              onClick={() => updateIsKilled("notKilled")}
            >
              L'ignorer
            </button>
          </div>
        );
    }
  }
  return switchKilled(isKilled);
};
