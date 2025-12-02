// Page projets

import React, { useEffect, useRef } from "react";
import { FaReact, FaJava } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import {
  SiUnity,
  SiBlender,
  SiPhp,
  SiMysql,
  SiJavascript,
  SiDocker,
  SiCanva,
  SiAdobephotoshop,
  SiKrita,
} from "react-icons/si";
import { useTranslation } from "react-i18next";
import "../styles/projets.css";

// Image des projets
import portfolioImage from "../assets/images/Portfolio_projet_small.webp";
import InstitutImage from "../assets/images/Institut_projet_small.webp";
import NutrigenixImage from "../assets/images/Projet_Communication_Nutrigenix_small.webp";
import MappingImage from "../assets/images/Projet_3D_Mapping_small.webp";
import JeuJava from "../assets/images/Projet_Java_M2_small.webp";

// Icones
import makeHumanIcon from "../assets/icons/makehuman-software.webp";

// Données des projets
const projetsData = [
  {
    category: "personnel",
    title: "projets.capillaire.title",
    text: "projets.capillaire.text",
    status: "projets.capillaire.status",
    image: InstitutImage,
    details: false,
    logos: [
      { type: "bootstrap", name: "bi-bootstrap" },
      { type: "react", component: FaReact },
    ],
  },
  {
    category: "personnel",
    title: "projets.portfolio.title",
    text: "projets.portfolio.text",
    image: portfolioImage,
    details: true,
    githubLink: "https://github.com/fannysht/Portfolio",
    logos: [
      { type: "bootstrap", name: "bi-bootstrap" },
      { type: "react", component: FaReact },
      { type: "krita", component: SiKrita },
    ],
  },
  {
    category: "universitaire",
    title: "projets.carteTete3D.title",
    text: "projets.carteTete3D.text",
    image: MappingImage,
    details: false,
    logos: [
      { type: "unity", component: SiUnity },
      { type: "blender", component: SiBlender },
      { type: "makeHuman", img: makeHumanIcon, alt: "MAKE HUMAN" },
    ],
  },
  {
    category: "universitaire",
    title: "projets.projetSantéPersonnalisée.title",
    text: "projets.projetSantéPersonnalisée.text",
    image: NutrigenixImage,
    details: false,
    logos: [
      { type: "photoshop", component: SiAdobephotoshop },
      { type: "canva", component: SiCanva },
    ],
  },
  {
    category: "universitaire",
    title: "projets.projetJava.title",
    text: "projets.projetJava.text",
    image: JeuJava,
    details: false,
    logos: [{ type: "java", component: FaJava }],
  },
  {
    category: "universitaire",
    title: "projets.projetWebEchange.title",
    text: "projets.projetWebEchange.text",
    details: false,
    logos: [
      { type: "php", component: SiPhp },
      { type: "mysql", component: SiMysql },
    ],
  },
  {
    category: "universitaire",
    title: "projets.projetParcoursup.title",
    text: "projets.projetParcoursup.text",
    details: false,
    logos: [
      { type: "javascript", component: SiJavascript },
      { type: "php", component: SiPhp },
      { type: "docker", component: SiDocker },
      { type: "mysql", component: SiMysql },
    ],
  },
];

// Composant pour afficher chaque logo
function LogoIcon({ logo }) {
  // Bootstrap
  if (logo.type === "bootstrap") {
    return (
      <span className="logo-wrapper">
        <i className={`bi ${logo.name} bootstrap-logo`}></i>
        <span className="tooltip-text">Bootstrap</span>
      </span>
    );
  }

  // Icônes React
  if (logo.component) {
    const Icon = logo.component;

    // couleurs et tailles
    const logoStyles = {
      react: { color: "#61DAFB", size: 32 },
      php: { color: "#777BB4", size: 43 },
      unity: { color: "#000000", size: 40 },
      blender: { color: "#F5792A", size: 40 },
      mysql: { color: "#00618A", size: 40 },
      javascript: { color: "#F7DF1E", size: 30 },
      docker: { color: "#2496ED", size: 40 },
      photoshop: { color: "#31A8FF", size: 35 },
      canva: { color: "#00C4CC", size: 35 },
      krita: { color: "#2D2D78", size: 35 },
      java: { color: "#5382A1", size: 40 },
    };

    const { color, size } = logoStyles[logo.type] || {
      color: "#000000",
      size: 30,
    };
    const title = logo.type.toUpperCase();

    return (
      <span className="logo-wrapper">
        <Icon size={size} color={color} title={title} />
        <span className="tooltip-text">{title}</span>
      </span>
    );
  }

  // Logos/Icônes en webp
  if (logo.img) {
    return (
      <span className="logo-wrapper">
        <img
          src={logo.img}
          alt={logo.alt || logo.type}
          style={{ width: 40, height: 40 }}
        />
        <span className="tooltip-text">
          {logo.alt || logo.type.toUpperCase()}
        </span>
      </span>
    );
  }

  return null;
}
// Composant pour chaque carte projet
function Card({ card, t }) {
  return (
    <div
      className={`custom-card-wrapper ${
        !card.image ? "no-image" : "has-header"
      }`}
    >
      <div className="card custom-card shadow-sm rounded-3 position-relative">
        {/* Image du projet : affichée seulement si il y a une image */}
        {card.image && (
          <div
            className="card-header custom-card-header"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        )}

        <div className="card-body custom-card-body d-flex flex-column">
          <h5 className="card-title">{t(card.title)}</h5>
          <p className="card-text">{t(card.text)}</p>

          {card.status && <p className="card-text-status">{t(card.status)}</p>}

          <div className="button-logos-wrapper">
            {card.logos.map((logo, i) => (
              <LogoIcon key={i} logo={logo} />
            ))}
            {card.details && (
              <a
                className="btn-projets"
                href={card.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="github-icon" />
                {t("projets.details")}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant principal
export default function Projets() {
  const { t } = useTranslation(); //  pour i18n
  const ref = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (ref.current) ref.current.classList.add("visible");
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="page-projets" ref={ref}>
      <h1 className="projets-section-title">{t("projets.pageTitle")}</h1>

      {/* Boucle pour afficher les projets */}
      {["personnel", "universitaire"].map((category) => {
        const cardsWithHeader = projetsData.filter(
          (p) => p.category === category && p.image
        );
        const cardsNoHeader = projetsData.filter(
          (p) => p.category === category && !p.image
        );

        return (
          <div key={category}>
            <h2 className="cards-section-title">
              {category === "personnel"
                ? t("projets.categoryPersonnel")
                : t("projets.categoryUniversitaire")}
            </h2>

            {/* Cartes avec image */}
            {cardsWithHeader.length > 0 && (
              <div className="cards-container has-header">
                {cardsWithHeader.map((card, i) => (
                  <Card key={i} card={card} t={t} />
                ))}
              </div>
            )}

            {/* Cartes sans image */}
            {cardsNoHeader.length > 0 && (
              <div className="cards-container no-image">
                {cardsNoHeader.map((card, i) => (
                  <Card key={i} card={card} t={t} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
