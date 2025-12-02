// Header - Navbar

import React, { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { useTranslation } from "react-i18next";
import ToggleLanguage from './toggleLanguage';
import logo from "../assets/images/Navbar_dessin_small.webp";

const NavBar = forwardRef((props, ref) => {
  const { t } = useTranslation(); // Pour i18
 const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="main-header" ref={ref}>
      <div className="container">
        <nav className="navbar navbar-expand-lg main-nav px-0">
          <NavLink
            className="navbar-brand"
            to="/home"
            onClick={() => setMenuOpen(false)}
          >
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
                <NavLink
                  to="/home"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setMenuOpen(false)}
                >
                  {t("nav.home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/diplomes"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setMenuOpen(false)}
                >
                  {t("nav.education")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setMenuOpen(false)}
                >
                  {t("nav.experience")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projets"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setMenuOpen(false)}
                >
                  {t("nav.projects")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setMenuOpen(false)}
                >
                  {t("nav.contact")}
                </NavLink>
              </li>

              <div className="nav-toggles">
                <ToggleLanguage />
              </div>
            </ul>
          </div>
        </nav>

        {/* Overlay menu pour mobile */}
        <div className={`nav-overlay ${menuOpen ? "open" : ""}`}>
          <ul className="navbar-nav">
            <li>
              <NavLink to="/home" onClick={() => setMenuOpen(false)}>
                {t("nav.home")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/diplomes" onClick={() => setMenuOpen(false)}>
                {t("nav.education")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" onClick={() => setMenuOpen(false)}>
                {" "}
                {t("nav.experience")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/projets" onClick={() => setMenuOpen(false)}>
                {t("nav.projects")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                {t("nav.contact")}
              </NavLink>
            </li>
            <div className="nav-toggles">
              <ToggleLanguage />
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
});

export default NavBar;
