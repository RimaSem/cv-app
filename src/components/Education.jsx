import { useState } from "react";
import Icon from "@mdi/react";
import { mdiPlusCircleOutline } from "@mdi/js";
import EducationCard from "./EducationCard";
import { nanoid } from "nanoid";

export default function Education() {
  const [cardArray, setCardArray] = useState([
    {
      id: "d42",
      component: (
        <EducationCard key={"d42"} id={"d42"} remove={removeFromArray} />
      ),
    },
    {
      id: "d43",
      component: (
        <EducationCard key={"d43"} id={"d43"} remove={removeFromArray} />
      ),
    },
  ]);

  function addToArray(id) {
    setCardArray((prev) => [
      ...prev,
      {
        id: id,
        component: <EducationCard key={id} id={id} remove={removeFromArray} />,
      },
    ]);
  }

  function removeFromArray(id) {
    setCardArray((prev) => prev.filter((item) => item.id !== id));
  }

  const displayCards = cardArray.map((card) => card.component);

  return (
    <div className="education-container">
      <div className="education-header">
        <h3>EDUCATION</h3>
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
