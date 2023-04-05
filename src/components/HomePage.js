import "../styles/PageLayout.css";

export const HomePage = ({ page, updatePage }) => {
  return (
    <div className="homePage">
      <button
        className="buttonEntry"
        type="button"
        onClick={() => updatePage(page + 1)}
      >
        JOUER
      </button>
    </div>
  );
};
