import React, { useState, forwardRef } from "react";
import { NavLink } from "react-router-dom";
import "../styles/index.css";
import logo from "../assets/images/Navbar-dessin.png";

const NavBar = forwardRef((props, ref) => {
  const [lang, setLang] = useState("FR");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLang = () => setLang(lang === "FR" ? "EN" : "FR");
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="main-header" ref={ref}>
      <div className="container">
        <nav className="navbar navbar-expand-lg main-nav px-0">
          <NavLink className="navbar-brand" to="/home" onClick={() => setMenuOpen(false)}>
            <img src={logo} alt="logo_header" />
          </NavLink>

          {/* Hamburger pour mobile */}
          <div
            className={`hamburger-container ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </div>

          {/* Menu normal */}
          <div
            className={`collapse navbar-collapse ${menuOpen ? "open" : ""}`}
            id="mainMenu"
          >
            <ul className="navbar-nav ml-auto text-uppercase f1 desktop-menu">
              <li>
                <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/diplomes" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
                  Éducation
                </NavLink>
              </li>
              <li>
                <NavLink to="/experience" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
                  Expérience
                </NavLink>
              </li>
              <li>
                <NavLink to="/projets" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
                  Projets
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
                  Contact
                </NavLink>
              </li>

              <div className="nav-toggles">
                <button className="btn-circle" onClick={toggleLang} title="Toggle language">
                  {lang}
                </button>
              </div>
            </ul>
          </div>
        </nav>

        {/* Overlay menu pour mobile */}
        <div className={`nav-overlay ${menuOpen ? "open" : ""}`}>
          <ul className="navbar-nav">
            <li>
              <NavLink to="/home" onClick={() => setMenuOpen(false)}>Accueil</NavLink>
            </li>
            <li>
              <NavLink to="/diplomes" onClick={() => setMenuOpen(false)}>Éducation</NavLink>
            </li>
            <li>
              <NavLink to="/experience" onClick={() => setMenuOpen(false)}>Expérience</NavLink>
            </li>
            <li>
              <NavLink to="/projets" onClick={() => setMenuOpen(false)}>Projets</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
            </li>
            <div className="nav-toggles">
              <button className="btn-circle" onClick={toggleLang}>
                {lang}
              </button>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
});

export default NavBar;
