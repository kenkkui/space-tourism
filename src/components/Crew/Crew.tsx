import { useState } from "react";
import data from "../../data.json";
import SubTab from "../SubTab";
const crewImages = [
  require("../../assets/crew/image-douglas-hurley.webp"),
  require("../../assets/crew/image-anousheh-ansari.webp"),
  require("../../assets/crew/image-mark-shuttleworth.webp"),
  require("../../assets/crew/image-victor-glover.webp"),
];

export default function Crew() {
  const [currCrewMember, setCurrCrewMember] = useState(0);

  return (
    <section className="crew page">
      <section className="crew-content">
        <h1 className="tab-subtitle">meet your crew</h1>

        <section className="crew">
          <div className="description">
            <div className="title">
              <h3>{data.crew[currCrewMember].role}</h3>
              <h1>{data.crew[currCrewMember].name}</h1>
            </div>

            <p>{data.crew[currCrewMember].bio}</p>
          </div>

          <div className="crew-image">
            <img src={crewImages[currCrewMember]} alt="Crew" />
          </div>
        </section>

        <SubTab
          map={crewImages}
          handleClick={setCurrCrewMember}
          clickState={currCrewMember}
        />
      </section>
    </section>
  );
}
