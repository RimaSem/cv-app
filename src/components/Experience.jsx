import { useState } from "react";
import Icon from "@mdi/react";
import { mdiPlusCircleOutline } from "@mdi/js";
import ExperienceCard from "./ExperienceCard";
import { nanoid } from "nanoid";

export default function Experience() {
  const [cardArray, setCardArray] = useState([
    {
      id: "e42",
      component: (
        <ExperienceCard key={"e42"} id={"e42"} remove={removeFromArray} />
      ),
    },
    {
      id: "e43",
      component: (
        <ExperienceCard key={"e43"} id={"e43"} remove={removeFromArray} />
      ),
    },
  ]);

  function addToArray(id) {
    setCardArray((prev) => [
      ...prev,
      {
        id: id,
        component: <ExperienceCard key={id} id={id} remove={removeFromArray} />,
      },
    ]);
  }

  function removeFromArray(id) {
    setCardArray((prev) => prev.filter((item) => item.id !== id));
  }

  const displayCards = cardArray.map((card) => card.component);

  return (
    <div className="experience-container">
      <div className="experience-header">
        <h3>WORK EXPERIENCE</h3>
        <Icon
          onClick={() => addToArray(nanoid())}
          className="add-new-card"
          path={mdiPlusCircleOutline}
          size={1.1}
          color="#f4f4f4"
        />
      </div>
      {displayCards}
    </div>
  );
}
