import { useState } from "react";

import moon from "../../assets/destination/image-moon.webp";
import mars from "../../assets/destination/image-mars.webp";
import europa from "../../assets/destination/image-europa.webp";
import titan from "../../assets/destination/image-titan.webp";
import data from "../../data.json";

export default function Destination() {
  const [currDestination, setCurrDestination] = useState(0);

  return (
    <section className="destination page">
      <div className="destination-content">
        <div className="illustration">
          <h1>Pick your destination</h1>
          <img src={moon} alt="Moon" />
        </div>

        <div className="description">
          <ul>
            {data.destinations.map((item, i) => {
              return (
                <li onClick={() => setCurrDestination(i)} key={i}>
                  {item.name}
                </li>
              );
            })}
          </ul>

          <h1>{data.destinations[currDestination].name}</h1>
          <p>{data.destinations[currDestination].description}</p>
        </div>
      </div>
    </section>
  );
}
