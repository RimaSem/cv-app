import { useState } from "react";
import { Icon } from "@mdi/react";
import { mdiPenPlus } from "@mdi/js";

export default function About() {
  const [editInfo, setEditInfo] = useState(false);
  const [description, setDescription] = useState(
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, doloribus quibusdam iste culpa incidunt illum fugit vel deleniti neque similique, maiores saepe quam beatae, molestias natus modi alias sint voluptas eveniet reiciendis! Reiciendis aperiam molestiae debitis eveniet, numquam officia consequuntur nisi velit neque alias sunt nobis, commodi fugiat, explicabo doloribus."
  );

  function handleSubmit(e) {
    e.preventDefault();
    const formData = document.querySelector(".about-container form");
    setDescription(formData[0].value);
    setEditInfo((prev) => !prev);
  }

  return (
    <div className="about-container">
      <div className="about-header">
        <h3>ABOUT ME</h3>
        <Icon
          onClick={() => setEditInfo((prev) => !prev)}
          className="content-edit-btn"
          path={mdiPenPlus}
          size={0.8}
          color="#048500"
        />
      </div>
      {editInfo ? (
        <form onSubmit={handleSubmit}>
          <textarea
            name="about"
            id="aboutInput"
            cols="20"
            rows="6"
            defaultValue={description}
          ></textarea>
          <button>Save</button>
        </form>
      ) : (
        <p className="about-description">{description}</p>
      )}
    </div>
  );
}
