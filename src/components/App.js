import { useState, useRef } from "react";
import { HomePage } from "./HomePage";
import { PageScroller } from "./PageScroller";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Questions } from "./Questions";
import img from "../assets/img.jpg";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";

import "../styles/App.css";

export function App() {
  const [page, updatePage] = useState(0);
  const [pseudo, updatePseudo] = useState("");
  const [ans1, updateAns1] = useState("");
  const [ans2, updateAns2] = useState("");
  const [ans3, updateAns3] = useState("");

  const ans1Input = useRef();
  const ans2Input = useRef();
  const ans3Input = useRef();

  const handleInput1 = (e) => {
    e.preventDefault();
    updateAns1(ans1Input.current.value);
    updatePage(page + 1);
  };
  const handleInput2 = (e) => {
    e.preventDefault();
    updateAns2(ans2Input.current.value);
    updatePage(page + 1);
  };
  const handleInput3 = (e) => {
    e.preventDefault();
    updateAns3(ans3Input.current.value);
    updatePage(page + 1);
  };

  function switchPage(page) {
    switch (page) {
      case 0:
        return <HomePage page={page} updatePage={updatePage} />;
      case 1:
        return <Page1 updatePseudo={updatePseudo} updatePage={updatePage} />;
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
        return <Questions page={page} updatePage={updatePage} />;
      case 5:
        return (
          <div>
            <h3>Voulez vous tuer l'ennemi?</h3>
            <button onClick={() => updatePage(6)}>Oui</button>
            <button onClick={() => updatePage(7)}>Non</button>
          </div>
        );
      case 6:
        return (
          <div>
            <h3>Il est kapout</h3>
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
                onClick={() => updatePage(8)}
              />
            </div>
          </div>
        );
      case 7:
        return (
          <div>
            <h3>Il est vivant</h3>
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
                onClick={() => updatePage(8)}
              />
            </div>
          </div>
        );
      case 8:
        return (
          <div>
            <h2>BLA BLA BLA</h2>
            <PageScroller page={page} updatePage={updatePage} />
          </div>
        );
      case 9:
        return (
          <div className="pseudo-maker">
            <h1>Qui es tu?</h1>
            <form onSubmit={(e) => handleInput1(e)}>
              <input placeholder="réponse1?" ref={ans1Input} />
              <input type="submit" hidden />
            </form>
          </div>
        );
      case 10:
        return (
          <div className="pseudo-maker">
            <h1>Où vas-tu?</h1>
            <form onSubmit={(e) => handleInput2(e)}>
              <input placeholder="réponse2?" ref={ans2Input} />
              <input type="submit" hidden />
            </form>
          </div>
        );
      case 11:
        return (
          <div className="pseudo-maker">
            <h1>Qu'as tu fait?</h1>
            <form onSubmit={(e) => handleInput3(e)}>
              <input placeholder="réponse3?" ref={ans3Input} />
              <input type="submit" hidden />
            </form>
          </div>
        );
      case 12:
        return (
          <div>
            <h2>{ans1}</h2>
            <h2>{ans2}</h2>
            <h2>{ans3}</h2>
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
