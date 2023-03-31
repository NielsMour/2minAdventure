import { useRef } from "react";
import "../styles/PageLayout.css";

export const Form = ({ page, updatePage, updateAns, text }) => {
  const ansInput = useRef();
  const handleInput = (e) => {
    e.preventDefault();
    updateAns(ansInput.current.value);
    updatePage(page + 1);
    Array.from(e.target).forEach((event) => (event.value = ""));
  };

  return (
    <div className="form">
      <h1>{text}</h1>
      <form onSubmit={(e) => handleInput(e)}>
        <input placeholder="réponse?" ref={ansInput} />
        <input type="submit" hidden />
      </form>
    </div>
  );
};
