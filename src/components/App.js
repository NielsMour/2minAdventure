import { useState, useRef, useEffect } from "react";
import { HomePage } from "./HomePage";
import { PageScroller } from "./PageScroller";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Questions } from "./Questions";
import { Form } from "./Form";
import { KillDecision } from "./KillDecision";
import img from "../assets/img.jpg";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";

import "../styles/App.css";

export function App() {
  const [page, updatePage] = useState(0);
  const [pseudo, updatePseudo] = useState("");
  const [lock, updateLock] = useState([false, false, false]);
  const [isKilled, updateIsKilled] = useState("");
  const [ans1, updateAns1] = useState("");
  const [ans2, updateAns2] = useState("");
  const [ans3, updateAns3] = useState("");

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
            text="Nom?"
          />
        );
      case 2:
        return <Page2 pseudo={pseudo} page={page} updatePage={updatePage} />;
      case 3:
        return (
          <div>
            <h2>BlaBlaBla</h2>
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
          <div>
            <h2>BLA BLA BLA</h2>
            <PageScroller page={page} updatePage={updatePage} />
          </div>
        );
      case 7:
        return (
          <Form
            page={page}
            updatePage={updatePage}
            updateAns={updateAns1}
            text="Qui es-tu?"
          />
        );
      case 8:
        return (
          <Form
            page={page}
            updatePage={updatePage}
            updateAns={updateAns2}
            text="Où vas-tu?"
          />
        );
      case 9:
        return (
          <Form
            page={page}
            updatePage={updatePage}
            updateAns={updateAns3}
            text="Qu'as tu fait?"
          />
        );
      case 10:
        return (
          <div>
            <h2>Qui es-tu : {ans1}</h2>
            <h2>Où vas-tu : {ans2}</h2>
            <h2>Qu'as tu fait : {ans3}</h2>
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
      case 11:
        return (
          <div>
            <h2>
              Voulez vous laisser un email pour savoir si vous allez être tué
              par le joueur suivant? :
            </h2>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="app">
      <img src={img} alt="histoire" className="app-img" />
      {switchPage(page)}
    </div>
  );
}
