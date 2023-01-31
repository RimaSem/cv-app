import samplePhoto from "../img/cv_img.jpg";
import { useState } from "react";
import { Icon } from "@mdi/react";
import {
  mdiPenPlus,
  mdiAccount,
  mdiEmailOutline,
  mdiPhone,
  mdiMapMarker,
} from "@mdi/js";

export default function Contacts() {
  const [photo, setPhoto] = useState("");
  const [editInfo, setEditInfo] = useState(false);
  const [name, setName] = useState("Name Surname");
  const [email, setEmail] = useState("n.surname@mail.com");
  const [phone, setPhone] = useState("0123412274");
  const [location, setLocation] = useState("Vilnius, Lithuania");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = document.querySelector(".contacts-content form");
    setName(formData[0].value);
    setEmail(formData[1].value);
    setPhone(formData[2].value);
    setLocation(formData[3].value);
    setEditInfo((prev) => !prev);
  }

  function showEditBtn() {
    document.querySelector(".edit-btn path").style.cssText = "fill: #a6ffbe";
  }

  function hideEditBtn() {
    document.querySelector(".edit-btn path").style.cssText = "fill: #2d2d2f";
  }

  return (
    <section
      onMouseEnter={showEditBtn}
      onMouseLeave={hideEditBtn}
      className="contacts-container"
    >
      <div className="photo-container">
        <input
          type="file"
          accept="image/png, image/jpg"
          className="upload-photo"
          onChange={(e) => setPhoto(e.target.files[0])}
        />

        <img
          className="photo"
          src={photo ? URL.createObjectURL(photo) : samplePhoto}
          alt="cv photo"
        />
      </div>

      <div className="contacts-header">
        <h3>PERSONAL INFO</h3>
        <Icon
          onClick={() => setEditInfo((prev) => !prev)}
          className="edit-btn"
          path={mdiPenPlus}
          size={0.8}
          color="#a6ffbe"
        />
      </div>
      <div className="contacts-content">
        {editInfo ? (
          <form onSubmit={handleSubmit}>
            <input
              id="name"
              name="name"
              defaultValue={name}
              placeholder="Full name"
            />
            <input
              type="tel"
              id="email"
              name="email"
              defaultValue={email}
              placeholder="Email"
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              defaultValue={phone}
              placeholder="Phone"
            />
            <input
              id="location"
              name="location"
              defaultValue={location}
              placeholder="Location"
            />
            <button>Save</button>
          </form>
        ) : (
          <>
            <div className="info-row">
              <Icon
                className="icon"
                path={mdiAccount}
                size={0.8}
                color="#f4f4f4"
              />
              <span className="name">{name}</span>
            </div>
            <div className="info-row">
              <Icon
                className="icon"
                path={mdiEmailOutline}
                size={0.8}
                color="#f4f4f4"
              />
              <span className="email">{email}</span>
            </div>
            <div className="info-row">
              <Icon
                className="icon"
                path={mdiPhone}
                size={0.8}
                color="#f4f4f4"
              />
              <span className="phone">{phone}</span>
            </div>
            <div className="info-row">
              <Icon
                className="icon"
                path={mdiMapMarker}
                size={0.8}
                color="#f4f4f4"
              />
              <span className="location">{location}</span>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
