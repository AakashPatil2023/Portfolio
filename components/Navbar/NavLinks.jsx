import { NavLink } from "react-router-dom";

const NavLinks = () => (
  <>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/skills">Skills</NavLink>
    <NavLink to="/projects">Projects</NavLink>
    <NavLink to="/experience">Experience</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </>
);

export default NavLinks;
