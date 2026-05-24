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
    src="https://scontent.flos3-1.fna.fbcdn.net/v/t39.30808-6/385439138_760265622571625_8182641048417543207_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=oS7qWm7ZVI4Q7kNvwH89OPH&_nc_oc=AdqOVFsjVCYYSwFTN7hAwHX-XYO4zKT3Bb3jKzpS8shwmsA7JMQMtTUUGQ_jSzg4Kh0&_nc_zt=23&_nc_ht=scontent.flos3-1.fna&_nc_gid=iRc-ynhOJve-Ykw24dyj-Q&_nc_ss=7b289&oh=00_Af7JGyWTq4znB1PhYrkvrDDkTG8hRT3GohjSdkHnMCvxWw&oe=6A0F8A7F"
    alt="school logo"
  />

  <span className="school-text">
    Elite Foundation Comprehensive College
  </span>
</h1>
        <button className="show-nav" onClick={() => setShowMenu(!showMenu)}>
          ☰
        </button>
        <button style={{ display: "none" }}>X</button>
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
