import { useState, useRef, useEffect } from "react";
import { HomePage } from "./HomePage";
import { PageScroller } from "./PageScroller";
import { Page2 } from "./Page2";
import { Questions } from "./Questions";
import { Form } from "./Form";
import { KillDecision } from "./KillDecision";
import img from "../assets/img.jpg";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";
import backgroundGeneric from "../assets/background/backgroundTest2.jpg";
import backgroundName from "../assets/background/life-maybe-bw.jpg";
import backgroundJourney from "../assets/background/encounter.jpg";
import backgroundCavern from "../assets/background/cavern-silhouette.jpg";
import backgroundDiscussion from "../assets/background/discussion.jpg";

import "../styles/App.css";
import { EmailForm } from "./EmailForm";

export function App() {
  const [page, updatePage] = useState(0);
  const [pseudo, updatePseudo] = useState("");
  const [lock, updateLock] = useState([false, false, false]);
  const [isKilled, updateIsKilled] = useState("");
  const [ans1, updateAns1] = useState("");
  const [ans2, updateAns2] = useState("");
  const [ans3, updateAns3] = useState("");
  const [email, updateEmail] = useState("");

  document.body.style.backgroundImage = `url(${backgroundGeneric})`;
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.backgroundSize = "cover";

  backgroundName;

  function switchPage(page) {
    switch (page) {
      case 0:
        return <HomePage page={page} updatePage={updatePage} />;
      case 1:
        document.body.style.backgroundImage = `url(${backgroundName})`;
        return (
          <Form
            page={page}
            updatePage={updatePage}
            updateAns={updatePseudo}
            text="Nom?"
          />
        );
      case 2:
        document.body.style.backgroundImage = `url(${backgroundJourney})`;
        return <Page2 pseudo={pseudo} page={page} updatePage={updatePage} />;
      case 3:
        document.body.style.backgroundImage = `url(${backgroundCavern})`;
        return (
          <div>
            <h2>BlaBlaBla</h2>
            <PageScroller page={page} updatePage={updatePage} />
          </div>
        );
      case 4:
        document.body.style.backgroundImage = `url(${backgroundDiscussion})`;
        return (
          <Questions
            page={page}
            updatePage={updatePage}
            lock={lock}
            updateLock={updateLock}
          />
        );
      case 5:
        document.body.style.backgroundImage = `url(${backgroundDiscussion})`;
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
          <div className="page">
            <div>
              <div>Qui es-tu : {ans1}</div>
              <div>Où vas-tu : {ans2}</div>
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
      case 11:
        return (
          <EmailForm
            page={page}
            updatePage={updatePage}
            updateEmail={updateEmail}
          />
        );
      case 12:
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

  return <div className="app">{switchPage(page)}</div>;
}
