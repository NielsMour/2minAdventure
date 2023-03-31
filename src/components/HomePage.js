import "../styles/HomePage.css";

export const HomePage = ({ page, updatePage }) => {
  return (
    <button className="buttonEntry" type="button" onClick={() => updatePage(1)}>
      Enter
    </button>
  );
};
