// Hobby component

import React from "react";
import "../styles/index.css";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

import hobbyPanda from "../assets/images/Panda-hobby-Dessin.png";
import musicIcon from "../assets/icons/musique.png";
import cameraIcon from "../assets/icons/cinema.png";
import pianoIcon from "../assets/icons/piano.png";
import devIcon from "../assets/icons/dev.png";
import photoIcon from "../assets/icons/photo.png";
import dessinIcon from "../assets/icons/dessin.png";
import jeuVideoIcon from "../assets/icons/console.png";

export default function HobbyCloud() {
  const { t } = useTranslation(); // Pour i18

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="passions-cloud-section" ref={ref}>
      <h2>{t("home.titreHobby")}</h2>

      {inView && (
        <div className="passions-cloud">
          {/* Dessin fait main sur Krita */}
          <img src={hobbyPanda} alt="Panda" className="floating-img" />

          {/* Icônes en orbite */}
          <img src={musicIcon} alt="Musique" className="orbit-icon icon1" />
          <img src={cameraIcon} alt="Cinéma" className="orbit-icon icon2" />
          <img src={pianoIcon} alt="Piano" className="orbit-icon icon3" />
          <img src={devIcon} alt="Développement" className="orbit-icon icon4" />
          <img src={photoIcon} alt="Photographie" className="orbit-icon icon5" />
          <img src={dessinIcon} alt="Dessin" className="orbit-icon icon6" />
          <img src={jeuVideoIcon} alt="Jeu vidéo" className="orbit-icon icon7" />
        </div>
      )}
    </section>
  );
}
