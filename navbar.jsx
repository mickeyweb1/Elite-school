// import { GraduationCap } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="school-name-dropdown">
        <h1 className="school-title">
          <img
            className="school-logo"
            src="images/logo.jpg"
            alt="school logo"
          />

          <span className="school-text">
            Elite Foundation Comprehensive College
          </span>
        </h1>
        <button className="show-nav" onClick={() => setShowMenu(!showMenu)}>
          ☰
        </button>
        <button style={{display: "none"}}>X</button>
      </div>

      <div className={`main-dropdown ${showMenu ? "show-menu" : ""}`}>
        <ul className="nav-ul">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-tab" : "")}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active-tab" : "")}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? "active-tab" : "")}
            >
              Gallery
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admissions"
              className={({ isActive }) => (isActive ? "active-tab" : "")}
            >
              Admissions
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active-tab" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
