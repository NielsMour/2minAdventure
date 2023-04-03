import "../styles/PageLayout.css";

export const HomePage = ({ page, updatePage }) => {
  return (
    <button
      className="buttonEntry"
      type="button"
      onClick={() => updatePage(page + 1)}
    >
      Play
    </button>
  );
};
