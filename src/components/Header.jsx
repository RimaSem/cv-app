export default function Header(props) {
  return (
    <header>
      <h2>CV BUILDER</h2>
      <button
        className="download-cv-btn"
        type="button"
        onClick={props.downloadCV}
      >
        DOWNLOAD CV
      </button>
    </header>
  );
}
