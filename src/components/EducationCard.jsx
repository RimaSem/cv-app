import { useState } from "react";
import Icon from "@mdi/react";
import { mdiPenPlus, mdiTrashCanOutline } from "@mdi/js";

export default function EducationCard(props) {
  const [id, setId] = useState(props.id);
  const [editInfo, setEditInfo] = useState(false);
  const [studyField, setStudyField] = useState("FIELD OF STUDY");
  const [school, setSchool] = useState("Name of Educational Institution");
  const [years, setYears] = useState("2009-2013");
  const [studyDescription, setStudyDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium optio numquam explicabo atque dolore itaque laborum maiores totam minima veritatis."
  );

  function handleSubmit(e) {
    e.preventDefault();
    const formData = document.querySelector(`#${id} form`);
    setStudyField(formData[0].value);
    setSchool(formData[1].value);
    setYears(formData[2].value);
    setStudyDescription(formData[3].value);
    setEditInfo((prev) => !prev);
  }

  return (
    <div id={id}>
      {!editInfo ? (
        <div className="education-card">
          <div className="study-field">
            <span>{studyField}</span>{" "}
            <div className="icons">
              <Icon
                onClick={() => setEditInfo((prev) => !prev)}
                className="content-edit-btn"
                path={mdiPenPlus}
                size={0.8}
                color="#f4f4f4"
              />
              <Icon
                onClick={() => props.remove(id)}
                className="content-delete-btn"
                path={mdiTrashCanOutline}
                size={0.8}
                color="#f4f4f4"
              />
            </div>
          </div>
          <p className="school">
            {school} | <span>{years}</span>
          </p>
          <p className="description">{studyDescription}</p>
        </div>
      ) : (
        <form className="education-form" onSubmit={handleSubmit}>
          <input
            name="studyField"
            defaultValue={studyField}
            placeholder="Field of study"
          />
          <input
            name="school"
            defaultValue={school}
            placeholder="Name of school"
          />
          <input
            type="tel"
            name="years"
            defaultValue={years}
            placeholder="Years studied"
          />
          <textarea
            name="studyDescription"
            cols="20"
            rows="4"
            defaultValue={studyDescription}
            placeholder="Description of studies"
          ></textarea>
          <button>Save</button>
        </form>
      )}
    </div>
  );
}
