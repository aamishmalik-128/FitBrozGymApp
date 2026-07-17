import "./About.css";
import { FaDumbbell, FaHeartbeat, FaChartLine, FaUsers } from "react-icons/fa";

const About = () => {

  return (

    <section className="about-page">


      {/* Hero Section */}

      <div className="about-hero">


        <div className="about-content">


          <h1>
            Build Your
            <span> Strongest Self</span>
          </h1>


          <p>
            FitBroz is a modern fitness platform designed to help you
            discover exercises, understand workouts, and stay consistent
            with your fitness journey.
          </p>


          <button>
            Start Training
          </button>


        </div>


        <div className="about-icon">

          <FaDumbbell />

        </div>


      </div>



      {/* Features */}


      <div className="about-features">


        <div className="feature-card">

          <FaHeartbeat />

          <h3>
            Better Health
          </h3>

          <p>
            Improve your strength, endurance, and overall fitness.
          </p>

        </div>



        <div className="feature-card">

          <FaChartLine />

          <h3>
            Track Progress
          </h3>

          <p>
            Monitor your workouts and improve step by step.
          </p>

        </div>



        <div className="feature-card">

          <FaUsers />

          <h3>
            For Everyone
          </h3>

          <p>
            Whether beginner or advanced, FitBroz supports everyone.
          </p>

        </div>


      </div>



      {/* Mission Section */}


      <div className="mission">


        <h2>
          Our Mission
        </h2>


        <p>
          Our goal is to make fitness simple and accessible.
          FitBroz provides a complete exercise library that helps
          people train smarter, stay motivated, and achieve their goals.
        </p>


      </div>


    </section>

  );

};


export default About;