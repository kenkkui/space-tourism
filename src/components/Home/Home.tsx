import { Link } from "react-router-dom";
interface HomeProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Home({ setCurrentPage }: HomeProps) {
  return (
    <section className="home page">
      <div className="home-content">
        <div className="hero-description">
          <h3>So, you want to travel to</h3>
          <h1>Space</h1>
          <p>
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>

        <Link
          className="explore"
          to="/destination"
          onClick={() => setCurrentPage(1)}
        >
          Explore
        </Link>
      </div>
    </section>
  );
}
