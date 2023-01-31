import { useState } from "react";
import Icon from "@mdi/react";
import { mdiPenPlus, mdiTrashCanOutline } from "@mdi/js";

export default function ExperienceCard(props) {
  const [id, setId] = useState(props.id);
  const [editInfo, setEditInfo] = useState(false);
  const [jobTitle, setJobTitle] = useState("JOB TITLE");
  const [companyName, setCompanyName] = useState("Company name");
  const [years, setYears] = useState("2011-2018");
  const [jobDescription, setJobDescription] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium optio numquam explicabo atque dolore itaque laborum maiores totam minima veritatis."
  );

  function handleSubmit(e) {
    e.preventDefault();
    const formData = document.querySelector(`#${id} form`);
    setJobTitle(formData[0].value);
    setCompanyName(formData[1].value);
    setYears(formData[2].value);
    setJobDescription(formData[3].value);
    setEditInfo((prev) => !prev);
  }

  return (
    <div id={id}>
      {!editInfo ? (
        <div className="experience-card">
          <div className="job-title">
            <span>{jobTitle}</span>{" "}
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
          <p className="company-name">
            {companyName} | <span>{years}</span>
          </p>
          <p className="description">{jobDescription}</p>
        </div>
      ) : (
        <form className="experience-form" onSubmit={handleSubmit}>
          <input
            name="jobTitle"
            defaultValue={jobTitle}
            placeholder="Job title"
          />
          <input
            name="companyName"
            defaultValue={companyName}
            placeholder="Company name"
          />
          <input
            type="tel"
            name="years"
            defaultValue={years}
            placeholder="Years worked"
          />
          <textarea
            name="jobDescription"
            cols="20"
            rows="4"
            defaultValue={jobDescription}
            placeholder="Job description"
          ></textarea>
          <button>Save</button>
        </form>
      )}
    </div>
  );
}
