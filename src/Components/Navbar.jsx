import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaDumbbell } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);


  return (

    <nav className="navbar">


      {/* Logo */}

      <NavLink
        to="/"
        className="logo"
        onClick={closeMenu}
      >

        <div className="logo-icon">
          <FaDumbbell />
        </div>


        <div className="logo-text">
          <span className="white">FiT</span>
          <span className="blue">Broz</span>
        </div>


      </NavLink>



      {/* Navigation */}

      <ul className={open ? "nav-links active" : "nav-links"}>


        <li>
          <NavLink
            to="/"
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </li>


        <li>
          <NavLink
            to="/exercises"
            onClick={closeMenu}
          >
            Exercises
          </NavLink>
        </li>


        <li>
          <NavLink
            to="/statistics"
            onClick={closeMenu}
          >
            Statistics
          </NavLink>
        </li>


        <li>
          <NavLink
            to="/about"
            onClick={closeMenu}
          >
            About
          </NavLink>
        </li>


      </ul>



      {/* CTA Button */}

      <NavLink
        to="/exercises"
        className="join-btn"
        onClick={() => navigate('/exercises')}
      >
        Explore Exercises
      </NavLink>



      {/* Mobile Menu */}

      <div
        className="menu-icon"
        onClick={() => setOpen(!open)}
      >

        {
          open
          ?
          <FaTimes />
          :
          <FaBars />
        }

      </div>


    </nav>

  );
};


export default Navbar;