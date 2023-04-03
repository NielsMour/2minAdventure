import { useState, useEffect } from "react";

import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";

const questionsList = ["Qui es tu?", "Où vas tu?", "Qu'as tu fait?"];
const reponsesList = ["3 Questions :", "'personne'", "'nulle part'", "'rien'"];

export function Questions({ page, updatePage, lock, updateLock }) {
  const [questId, updateQuestId] = useState(0);

  function switchLock(arr, i) {
    arr.slice(i, i + 1);
    return [...arr.slice(0, i), true, ...arr.slice(i + 1, arr.length)];
  }

  //useEffect(() => console.log(lock), [lock]);

  return (
    <div className="page">
      <h3>{reponsesList[questId]}</h3>
      <div>
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
        ;
      </div>
    </div>
  );
}
