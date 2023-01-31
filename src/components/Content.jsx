import About from "./About";
import Experience from "./Experience";
import Education from "./Education";

export default function Content() {
  function showButtons() {
    document
      .querySelectorAll(".content-edit-btn path")
      .forEach((item) => (item.style.cssText = "fill: #048500"));
    document
      .querySelectorAll(".content-delete-btn path")
      .forEach((item) => (item.style.cssText = "fill: red"));
    document
      .querySelectorAll(".add-new-card path")
      .forEach((item) => (item.style.cssText = "fill: #9fcfac"));
  }

  function hideButtons() {
    document
      .querySelectorAll(".content-edit-btn path")
      .forEach((item) => (item.style.cssText = "fill: #f4f4f4"));
    document
      .querySelectorAll(".content-delete-btn path")
      .forEach((item) => (item.style.cssText = "fill: #f4f4f4"));
    document
      .querySelectorAll(".add-new-card path")
      .forEach((item) => (item.style.cssText = "fill: #f4f4f4"));
  }

  return (
    <section
      className="content-container"
      onMouseEnter={showButtons}
      onMouseLeave={hideButtons}
    >
      <About />
      <Experience />
      <Education />
    </section>
  );
}
