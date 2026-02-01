import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="logo">Aakash Portfolio</h1>

      {/* Hamburger */}
      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><NavLink onClick={() => setMenuOpen(false)} to="/">Home</NavLink></li>
        <li><NavLink onClick={() => setMenuOpen(false)} to="/about">About</NavLink></li>
        <li><NavLink onClick={() => setMenuOpen(false)} to="/skills">Skills</NavLink></li>
        <li><NavLink onClick={() => setMenuOpen(false)} to="/projects">Projects</NavLink></li>
        <li><NavLink onClick={() => setMenuOpen(false)} to="/experience">Experience</NavLink></li>
        <li><NavLink onClick={() => setMenuOpen(false)} to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
