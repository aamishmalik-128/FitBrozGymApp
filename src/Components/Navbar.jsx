import { useState } from "react";
import { FaBars, FaTimes, FaDumbbell } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}

      <div className="logo">

        <div className="logo-icon">
          <FaDumbbell />
        </div>

        <div className="logo-text">
          <span className="white">FiT</span>
          <span className="blue">Broz</span>
        </div>

      </div>

      {/* Navigation */}

      <ul className={open ? "nav-links active" : "nav-links"}>

        <li>
          <a href="#" className="active-link">Home</a>
        </li>

        <li>
          <a href="#">Exercises</a>
        </li>

        <li>
          <a href="#">Programs</a>
        </li>

        <li>
          <a href="#">Nutrition</a>
        </li>

        <li>
          <a href="#">About</a>
        </li>

      </ul>

      {/* Button */}

      <button className="join-btn">
        Start Training
      </button>

      {/* Mobile */}

      <div
        className="menu-icon"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </div>

    </nav>
  );
};

export default Navbar;