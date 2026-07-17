import { Link } from "react-router-dom";
import "./Footer.css";
import { FaDumbbell, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <FaDumbbell />
            FitBroz
          </Link>

          <p>
            Your ultimate fitness companion. Discover exercises,
            build better habits, and achieve your fitness goals.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Github">
              <FaGithub />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>


        {/* Navigation */}
        <div className="footer-links">

          <div>
            <h3>Explore</h3>

            <Link to="/">Home</Link>
            <Link to="/exercises">Exercises</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/about">About</Link>

          </div>


          <div>
            <h3>Fitness</h3>

            <Link to="/exercises">Workout Plans</Link>
            <Link to="/categories">Body Parts</Link>
            <Link to="/exercises">Training Tips</Link>

          </div>


          <div>
            <h3>Support</h3>

            <Link to="/about">Contact</Link>
            <Link to="/about">Privacy Policy</Link>
            <Link to="/about">Terms</Link>

          </div>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} FitBroz. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;