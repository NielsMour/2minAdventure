import { useState, useEffect } from "react";

import "../styles/PageLayout.css";

import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";

const questionsList = [
  "Qui es-tu?",
  "Qu'y a-t-il derrière toi?",
  "Qu'as-tu fait?",
];
const reponsesList = [
  "",
  "'Juste un simple villageois comme toi'",
  "'Tu ne veux pas savoir'",
  "'Rien de grave je te promets'",
];

export function Questions({ page, updatePage, lock, updateLock }) {
  const [questId, updateQuestId] = useState(0);

  function switchLock(arr, i) {
    arr.slice(i, i + 1);
    return [...arr.slice(0, i), true, ...arr.slice(i + 1, arr.length)];
  }

  //useEffect(() => console.log(lock), [lock]);

  return (
    <div className="page">
      <h2>{">"} Tu peux poser trois questions à l'homme ensanglanté :</h2>
      <div className="questions">
        {questionsList.map((q, index) => (
          <button
            key={`${index + q.length}`}
            className={"q" + index}
            onClick={() => {
              updateQuestId(index + 1);
              updateLock((arr) => switchLock(arr, index));
            }}
          >
            {q}
          </button>
        ))}
      </div>
      <div className="responses">{reponsesList[questId]}</div>
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
          className={
            lock.toString() == "true,true,true"
              ? "arrow-right"
              : "arrow-right-shadow"
          }
          onClick={() =>
            lock.toString() == "true,true,true"
              ? updatePage(page + 1)
              : undefined
          }
        />
      </div>
    </div>
  );
}
