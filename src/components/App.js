import { useState, useRef, useEffect } from "react";
import { useSpring, useTransition, animated } from "react-spring";

import { HomePage } from "./HomePage";
import { PageScroller } from "./PageScroller";
import { Page2 } from "./Page2";
import { Questions } from "./Questions";
import { Form } from "./Form";
import { KillDecision } from "./KillDecision";

import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";
import img from "../assets/img.jpg";

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

  const transition = useTransition(page, {
    from: { opacity: "0" },
    enter: { opacity: "1" },
    leave: { opacity: "1" },
    trail: "5000",
    config: { duration: "700" },
  });

  document.title = "2minAdventure";

  function mainTitle() {
    if (page == 0) {
      return <h1>2minAdventure</h1>;
    }
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
            text="> Comment s'appelle le héro?"
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

  return (
    <div>
      {transition((style, i) => {
        return (
          <animated.div style={style} className={`background${i}`}>
            <div className="Title">{mainTitle()}</div>
          </animated.div>
        );
      })}
      <div className="box">{switchPage(page)}</div>
    </div>
  );
}
