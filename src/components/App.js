import { useState, useRef, useEffect } from "react";
import { useSpring, useTransition, animated } from "react-spring";

import { HomePage } from "./HomePage";
import { PageScroller } from "./PageScroller";
import { Page2 } from "./Page2";
import { Questions } from "./Questions";
import { Form } from "./Form";
import { KillDecision } from "./KillDecision";
import { EmailForm } from "./EmailForm";

import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";
import menu from "../assets/menu.png";

import "../styles/App.css";

export function App() {
  const [page, updatePage] = useState(0);
  const [pseudo, updatePseudo] = useState("");
  const [lock, updateLock] = useState([false, false, false]);
  const [isKilled, updateIsKilled] = useState("");
  const [ans1, updateAns1] = useState("");
  const [ans2, updateAns2] = useState("");
  const [ans3, updateAns3] = useState("");
  const [email, updateEmail] = useState("");

  const transition = useTransition(page, {
    from: { opacity: "0" },
    enter: { opacity: "1" },
    leave: { opacity: "1" },
    trail: "5000",
    config: { duration: "1000" },
  });

  document.title = "2minAdventure";

  function mainTitle() {
    if (page == 0) {
      return <h1>2minAdventure</h1>;
    }
  }

  function handleMenu() {
    alert("Mentions Particulières : collaboartion Forge Futile et moi");
  }

  function switchPage(page) {
    switch (page) {
      case 0:
        return <HomePage page={page} updatePage={updatePage} />;
      case 1:
        return (
          <Form
            page={page}
            updatePage={updatePage}
            updateAns={updatePseudo}
            text="> Quel est ton nom?"
          />
        );
      case 2:
        return <Page2 pseudo={pseudo} page={page} updatePage={updatePage} />;
      case 3:
        return (
          <div className="page">
            <h2>{">"} Confrontation</h2>
            <p className="text">
              Tu arrives en haut du chemin et déjà le village te semble bien
              loin. Devant toi la route s'efface progressivement jusqu'à
              disparaître à l'orée d'une immense forêt. Tu décides de suivre un
              petit ruisseau pour pénétrer dans l'imposant bosquet.
            </p>
            <p className="text">
              L'air devient lourd à mesure que tu t'enfonces, tu sais au fond de
              toi que tu suis la bonne voie. Les arbres semblent se resserrer
              sur toi, les branches aiguisées de tailladent les joues et tes
              vêtements. Quand soudain :
            </p>
            <p className="text">
              Ton chemin s'illumine et tu distingue au loin une sombre caverne.
              Alors que tu t'approches de l'entrée, le ventre noué, un homme
              s'extirpe de celle-ci. Son regard est figé, il est couvert de
              sang. Pourtant il ne semble présenter aucune blessure. Ce n'est
              pas son sang.
            </p>
            <PageScroller page={page} updatePage={updatePage} />
          </div>
        );
      case 4:
        return (
          <Questions
            page={page}
            updatePage={updatePage}
            lock={lock}
            updateLock={updateLock}
          />
        );
      case 5:
        return (
          <KillDecision
            page={page}
            updatePage={updatePage}
            isKilled={isKilled}
            updateIsKilled={updateIsKilled}
          />
        );
      case 6:
        return (
          <div className="page">
            <h2>{">"} Découverte</h2>
            <p className="text">
              Tu t'enfonces dans une grotte sombre et inerte. Le sol est
              poisseux, tu ne vois pas tes pieds aussi tu avance difficelement,
              à tâtons. Soudainement tu trébuches sur un obstacle mou.
            </p>
            <p className="text">
              Alors que tu descends le regard pour analyser sur quoi tu viens de
              butter, tu comprends déjà. Tu parcours l'obstacle des mains. C'est
              ta soeur, inanimée. Tu l'enlaces tendrement et essayes de la
              réveiller mais en vain. Son corps est couvert de sang et désormais
              le tiens aussi.
            </p>
            <p className="text">
              Il n'y a rien à faire. Un frisson de peur te parcours le corps. Tu
              te redresses, les bras amorphes te font lâcher le cadavre souillé.
              Tes pieds semblent te guider à ton insu. Sans le remarquer te
              voilà en marche pour la sortie. Lorsque tu pénétre à l'extérieur,
              quelqu'un est là.
            </p>
            <PageScroller page={page} updatePage={updatePage} />
          </div>
        );
      case 7:
        return (
          <div className="page">
            <h2>{">"} Confrontation 2</h2>
            <p className="text">
              L'individu te semble familier. Il a suivi le même chemin que toi
              et se tient droit là ou toi même te tenait plus tôt.
            </p>
            <p className="text">
              Encore sous le choc de ta découverte tu ne réalises pas exactement
              ce qu'il se passe.
            </p>
            <p className="text">
              C'est alors que le villageois s'adresse à toi afin de comprendre
              ce qu'il se passe :
            </p>
            <PageScroller page={page} updatePage={updatePage} />
          </div>
        );
      case 8:
        return (
          <Form
            page={page}
            updatePage={updatePage}
            updateAns={updateAns1}
            text="> Qui es tu?"
          />
        );
      case 9:
        return (
          <Form
            page={page}
            updatePage={updatePage}
            updateAns={updateAns2}
            text="> Qu'y a-t-il derrière toi?"
          />
        );
      case 10:
        return (
          <Form
            page={page}
            updatePage={updatePage}
            updateAns={updateAns3}
            text="> Qu'as tu fait?"
          />
        );
      case 11:
        return (
          <div className="page">
            <div>
              <div>Qui es-tu : {ans1}</div>
              <div>qu'y a-t-il derrière toi : {ans2}</div>
              <div>Qu'as tu fait : {ans3}</div>
            </div>
            <div className="arrow-menu">
              <img
                src={arrowLeft}
                alt="flècheGauche"
                className="arrow-left-shadow"
              />
              <img
                src={arrowRight}
                alt="flècheDroite"
                className="arrow-right"
                onClick={() => updatePage(page + 1)}
              />
            </div>
          </div>
        );
      case 12:
        return (
          <EmailForm
            page={page}
            updatePage={updatePage}
            updateEmail={updateEmail}
          />
        );
      case 13:
        return (
          <div className="page">
            <h1>Merci d'avoir joué!</h1>
            {email}
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="App">
      {transition((style, i) => {
        return (
          <animated.div style={style} className={`background${i}`}>
            <div className="Title">{mainTitle()}</div>
          </animated.div>
        );
      })}
      <div className="box">{switchPage(page)}</div>
      <img src={menu} alt="menu" className="menu" onClick={handleMenu} />
    </div>
  );
}
