import "./HeroBanner.css";
import herobanner from "../assets/herobanner.jpg";

const HeroBanner = () => {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-tag">
          🔥 #1 Fitness Platform
        </span>

        <h1>
          INVEST IN
          <br />
          <span>YOUR HEALTH</span>
        </h1>

        <p>
          Build strength, burn fat, and transform your lifestyle
          with personalized workouts and nutrition plans.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Start Training
          </button>

          <button className="secondary-btn">
            Explore Exercises
          </button>
        </div>

      </div>

      <div className="hero-image">

        <img src={herobanner} alt="Gym Athlete" />

      </div>

    </section>
  );
};

export default HeroBanner;