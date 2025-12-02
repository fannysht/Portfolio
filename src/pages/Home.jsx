// Page d'accueil

import React from "react";
import "../styles/home.css";
import { useTranslation } from "react-i18next";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import Skills from "../components/Skills.jsx";
import Hobby from "../components/Hobby";
import imgProfil from "../assets/images/photo_small_home.webp";

export default function Home() {
  const { t } = useTranslation(); // pour i18n

  // Paramètres pour générer les bulles
  const totalBubbles = 30;
  const colors = ["#7fbfae", "#5f9c87", "#3b715b"];

  // Génération des bulles aléatoires
  const bubbles = Array.from({ length: totalBubbles }).map((_, i) => {
    const size = Math.random() * 100 + 40; // taille (en px)
    const left = Math.random() * 100; // position horizontale (en %)
    const duration = Math.random() * 15 + 5; // durée de l'animation
    const delay = Math.random() * 2; // délai avant démarrage
    const opacity = Math.random() * 0.4 + 0.3; // opacité
    const blur = Math.random() * 2 + 0.5; // flou
    const color = colors[Math.floor(Math.random() * colors.length)];

    return (
      <li
        key={i}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          background: `radial-gradient(circle at 30% 30%, ${color}${Math.floor(
            opacity * 255
          ).toString(16)}, ${color}0A)`,
          borderRadius: "50%",
          filter: `blur(${blur}px)`,
          boxShadow: `0 0 ${size / 3}px ${color}${Math.floor(
            opacity * 255
          ).toString(16)}`,
        }}
      ></li>
    );
  });

  return (
    <>
      {/* Background */}
      <div className="bio-bg">
        <ul className="circles">{bubbles}</ul>
        <div className="glass-overlay"></div>
      </div>

      {/* Contenu principal */}
      <div className="main-content">
        <div className="home-layout">
          <div className="fancy-shape-wrapper">
            <div className="fancy-shape"></div>
            <img
              src={imgProfil}
              alt="Portrait Fanny Schott"
              fetchPriority="high"
              className="fancy-image"
            />
          </div>

          <div className="home-text">
            <h1>
              {t("home.titre")}{" "}
              <span className="highlight-name">Fanny Schott</span>
            </h1>
            <p>{t("home.descr")}</p>
            {/* Liens réseaux */}
            <div className="contact-links-container-home">
              <a
                href="https://www.linkedin.com/in/fanny-schott"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social-home"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/fannysht"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social-home"
                title="GitHub"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="section-divider"></div>

        {/* Section des compétences */}
        <Skills />
        <div className="section-divider"></div>

        {/* Section des hobbies */}
        <Hobby />
      </div>
    </>
  );
}
