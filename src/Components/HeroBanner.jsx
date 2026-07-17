import "./HeroBanner.css";
import herobanner from "../assets/herobanner.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const HeroBanner = () => {
  const navigate = useNavigate()
  return (
    <motion.section
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="hero"
>

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
          <button className="primary-btn" onClick={() => navigate('/exercises')}>
            Start Training
          </button>

          <button className="secondary-btn" onClick={() => navigate('/exercises')}>
            Explore Exercises
          </button>
        </div>

      </div>

      <div className="hero-image">

        <img src={herobanner} alt="Gym Athlete" />

      </div>

    </motion.section>
  );
};

export default HeroBanner;