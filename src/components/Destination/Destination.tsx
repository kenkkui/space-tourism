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
          <h1>pick your destination</h1>
        </div>

        <div className="description">
          <main>
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

            <h1>{data.destinations[currDestination].name}</h1>
            <p>{data.destinations[currDestination].description}</p>
          </main>

          <aside>
            <section>
              <h6>avg. distance</h6>
              <p>{data.destinations[currDestination].distance}</p>
            </section>
            <section>
              <h6>est. travel time</h6>
              <p>{data.destinations[currDestination].travel}</p>
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
}
