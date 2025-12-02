// Header - Navbar

import React, { useState, useEffect, forwardRef } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { useTranslation } from "react-i18next";
import logo from "../assets/images/Navbar_dessin_small.webp";

const NavBar = forwardRef((props, ref) => {
  const { t, i18n } = useTranslation(); // Pour i18
  const [lang, setLang] = useState(i18n.language.toUpperCase());
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleLang = () => {
    const newLang = lang === "FR" ? "EN" : "FR";
    setLang(newLang);
    i18n.changeLanguage(newLang.toLowerCase());
  };
  useEffect(() => {
    const savedLang = localStorage.getItem("siteLang");
    if (savedLang) {
      i18n.changeLanguage(savedLang);
      setLang(savedLang.toUpperCase());
    }
  }, [i18n]);

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
                <button
                  className="btn-circle"
                  onClick={toggleLang}
                  title="Toggle language"
                >
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
