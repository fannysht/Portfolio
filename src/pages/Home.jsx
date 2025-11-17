import React from "react";
import "../styles/index.css";
import Skills from "../components/Skills.jsx";
import Hobby from '../components/Hobby'; 
import imgProfil from "../assets/images/photo.JPG";

export default function Home() {
  const totalBubbles = 30;
  const colors = ["#7fbfae", "#5f9c87", "#3b715b"];

  const bubbles = Array.from({ length: totalBubbles }).map((_, i) => {
    const size = Math.random() * 100 + 40;
    const left = Math.random() * 100;
    const duration = Math.random() * 15 + 5;
    const delay = Math.random() * 2;
    const opacity = Math.random() * 0.4 + 0.3;
    const blur = Math.random() * 2 + 0.5;
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
      {/* Fond animé */}
      <div className="bio-bg">
        <ul className="circles">{bubbles}</ul>
        <div className="glass-overlay"></div>
      </div>

      {/* Contenu scrollable */}
      <div className="main-content">
        {/* Hero */}
        <div className="home-layout">
          <div className="fancy-shape-wrapper">
            <div className="fancy-shape"></div>
            <img src={imgProfil} alt="Overlay" className="fancy-image" />
          </div>

          <div className="home-text">
            <h1>
              Bonjour, je suis{" "}
              <span className="highlight-name">Fanny Schott</span>
            </h1>
            <p>
              Développeuse Full Stack spécialisée en bioinformatique, passionnée
              par le traitement de données et la création de solutions web.
            </p>
            <div className="contact-links-container-home">
              <a
                href="https://www.linkedin.com/in/fanny-schott"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social-home"
                title="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social-home"
                title="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="section-divider"></div>

        {/* Section Skills */}
        <Skills />
        <div className="section-divider"></div>
        <Hobby />




      </div>
    </>
  );
}
