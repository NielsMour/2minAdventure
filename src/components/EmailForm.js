import { useRef } from "react";

export const EmailForm = ({ page, updatePage, updateEmail }) => {
  const emailInput = useRef();

  const handleEmail = (e) => {
    e.preventDefault();
    updateEmail(emailInput.current.value);
    updatePage(page + 1);
    Array.from(e.target).forEach((event) => (event.value = ""));
  };

  return (
    <div className="page">
      <h2>
        Voulez vous laisser un email pour savoir si vous allez être tué par le
        joueur suivant? :
      </h2>
      <form onSubmit={(e) => handleEmail(e)}>
        <input type="email" placeholder="email" ref={emailInput} />
        <input type="submit" hidden />
        <button>Non</button>
      </form>
    </div>
  );
};
