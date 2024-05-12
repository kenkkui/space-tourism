import moon from "../../assets/destination/image-moon.webp";
import mars from "../../assets/destination/image-mars.webp";
import europa from "../../assets/destination/image-europa.webp";
import titan from "../../assets/destination/image-titan.webp";

export default function Destination() {
  return (
    <section className="destination page">
      <div className="destination-content">
        <div className="illustration">
          <h1>Pick your destination</h1>
          <img src={moon} alt="Moon" />
        </div>

        <div className="description">
          <ul>
            <li>Moon</li>
            <li>Mars</li>
            <li>Europa</li>
            <li>Titan</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
