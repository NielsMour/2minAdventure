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
        Souhaitez vous laisser un email afin d'être contacté pour savoir si vous
        avez été tué ou non par le jouer suivant?
      </h2>
      <form className="mailForm" onSubmit={(e) => handleEmail(e)}>
        <input
          className="textBox"
          type="email"
          placeholder="mail?"
          ref={emailInput}
        />
        <input type="submit" hidden />
        <button className="textBox">Non</button>
      </form>
    </div>
  );
};
