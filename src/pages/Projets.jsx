import React, { useEffect, useRef } from "react";
import { FaReact } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import "../styles/index.css";

import portfolioImage from "../assets/images/Portfolio-projet.png";

// Tableau des projets avec images et option "details"
const projets = [
  {
    category: "personnel",
    title: "Institut Capillaire - Colmar",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "../assets/images/Portfolio-projet.png",
    details: true,
    logos: [
      { type: "bootstrap", name: "bi-bootstrap" },
      { type: "react", component: FaReact },
    ],
  },
  {
    category: "personnel",
    title: "Mon portfolio",
    text: "Phasellus pretium, sapien eu dapibus faucibus, sapien.",
    image: portfolioImage,
    details: false,
    logos: [
      { type: "bootstrap", name: "bi-bootstrap" },
      { type: "react", component: FaReact },
    ],
  },
  {
    category: "personnel",
    title: "Jeu Web",
    text: "Phasellus pretium, sapien eu dapibus faucibus, sapien.",
    image: "../assets/images/Portfolio-projet.png",
    details: true,
    logos: [
      { type: "bootstrap", name: "bi-bootstrap" },
      { type: "react", component: FaReact },
    ],
  },
  {
    category: "universitaire",
    title: "Test",
    text: "Phasellus pretium, sapien eu dapibus faucibus, sapien.",
    image: "/assets/images/universitaire1.png",
    details: false,
    logos: [
      { type: "php", component: SiPhp },
      { type: "react", component: FaReact },
    ],
  },
  {
    category: "universitaire",
    title: "Card 3",
    text: "Nunc felis ligula, fermentum eget justo sit amet.",
    image: "/assets/images/universitaire2.png",
    details: true,
    logos: [
      { type: "bootstrap", name: "bi-bootstrap" },
      { type: "react", component: FaReact },
    ],
  },
  {
    category: "universitaire",
    title: "Card 4",
    text: "Nunc felis ligula, fermentum eget justo sit amet.",
    image: "/assets/images/universitaire3.png",
    details: false,
    logos: [
      { type: "bootstrap", name: "bi-bootstrap" },
      { type: "react", component: FaReact },
    ],
  },
];

// Composant pour les logos
function LogoIcon({ logo }) {
  if (logo.type === "bootstrap") {
    return (
      <span className="logo-wrapper">
        <i className={`bi ${logo.name} bootstrap-logo`}></i>
        <span className="tooltip-text">Bootstrap</span>
      </span>
    );
  }

  if (logo.component) {
    const Icon = logo.component;
    const color = logo.type === "react" ? "#61DAFB" : "#777BB4";
    const size = logo.type === "php" ? 40 : 30;
    const title = logo.type === "php" ? "PHP" : null;

    return (
      <span className="logo-wrapper">
        <Icon size={size} color={color} title={title} />
        <span className="tooltip-text">{logo.type === "react" ? "React" : "PHP"}</span>
      </span>
    );
  }

  return null;
}

// Composant pour une carte
function Card({ card }) {
  return (
    <div className="custom-card-wrapper">
      <div className="card custom-card shadow-sm rounded-3 position-relative">
        {/* Image du projet */}
        <div
          className="card-header custom-card-header"
          style={{
            backgroundImage: `url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="card-body custom-card-body d-flex flex-column">
          <h5 className="card-title">{card.title}</h5>
          <p className="card-text">{card.text}</p>

          {/* Wrapper pour bouton + logos */}
          <div className="button-logos-wrapper">
            {card.logos.map((logo, i) => (
              <LogoIcon key={i} logo={logo} />
            ))}
            {card.details && <button className="btn-projets">Plus de détails</button>}
            
          </div>
        </div>
      </div>
    </div>
  );
}

// Composant principal Projets
export default function Projets() {
  const ref = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (ref.current) ref.current.classList.add("visible");
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="page-projets" ref={ref}>
      <h1 className="projets-section-title">Page projet</h1>

      {/* Génération dynamique par catégorie */}
      {["personnel", "universitaire"].map((category) => (
        <div key={category} className="cards-container">
          <h2 className="cards-section-title">
            {category === "personnel" ? "Projets personnels" : "Projets universitaires"}
          </h2>
          {projets
            .filter((p) => p.category === category)
            .map((card, index) => (
              <Card key={index} card={card} />
            ))}
        </div>
      ))}
    </div>
  );
}
