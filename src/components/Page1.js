import { useRef } from "react";
import "../styles/PageLayout.css";

export const Page1 = ({ updatePage, updatePseudo }) => {
  const pseudoInput = useRef();

  const handleInput = (e) => {
    e.preventDefault();
    updatePseudo(pseudoInput.current.value);
    updatePage(2);
  };

  return (
    <div className="form">
      <h1>Nom?</h1>
      <form onSubmit={(e) => handleInput(e)}>
        <input placeholder="pseudo" ref={pseudoInput} />
        <input type="submit" hidden />
      </form>
    </div>
  );
};
