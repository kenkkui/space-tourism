import { useState } from "react";

import data from "../../data.json";

const destinations = [
  require("../../assets/destination/image-moon.webp"),
  require("../../assets/destination/image-mars.webp"),
  require("../../assets/destination/image-europa.webp"),
  require("../../assets/destination/image-titan.webp"),
];

export default function Destination() {
  const [currDestination, setCurrDestination] = useState(0);

  return (
    <section className="destination page">
      <div className="destination-content">
        <div className="illustration">
          <img src={destinations[currDestination]} alt="Moon" />
        </div>

        <div className="description">
          <ul>
            {data.destinations.map((item, i) => {
              return (
                <li
                  key={i}
                  onClick={() => setCurrDestination(i)}
                  className={currDestination === i ? "active" : ""}
                >
                  {item.name}
                </li>
              );
            })}
          </ul>

          {/* <h1>{data.destinations[currDestination].name}</h1>
          <p>{data.destinations[currDestination].description}</p> */}
        </div>
      </div>
    </section>
  );
}
