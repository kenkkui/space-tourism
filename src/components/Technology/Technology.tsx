import { useState } from "react";
import data from "../../data.json";

const technologyImages = [
  require("../../assets/technology/image-launch-vehicle-portrait.jpg"),
  require("../../assets/technology/image-spaceport-portrait.jpg"),
  require("../../assets/technology/image-space-capsule-portrait.jpg"),
];

function Technology() {
  const [currTechnology, setCurrTechnology] = useState(0);
  const { name, description } = data.technology[currTechnology];

  return (
    <section className="technology page">
      <div className="technology-content">
        <h1 className="tab-subtitle">space launch 101</h1>

        <section className="technology">
          

          <section className="description">
            <h3>The technology</h3>
            <h1>{name}</h1>
            <p>{description}</p>
          </section>

          <section className="technology-images">
            <img src={technologyImages[currTechnology]} alt="Technology" />
          </section>
        </section>
      </div>
    </section>
  );
}

export default Technology;
