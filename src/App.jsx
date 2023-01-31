import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Content from "./components/Content";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";

export default function App() {
  const downloadCV = async () => {
    const canvas = await html2canvas(document.querySelector(".cv-container"), {
      scale: 2,
    });
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, "my_cv.png", "image/png");
  };

  return (
    <div className="App">
      <Header downloadCV={downloadCV} />
      <div className="cv-container">
        <Contacts />
        <Content />
      </div>
    </div>
  );
}
