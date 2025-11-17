import React, { useEffect } from "react";
import "../styles/index.css";
import UnivPoitiers from "../assets/images/Univ_Poitiers.png";
import UnivAurillac from "../assets/images/Univ_Aurillac.png";


const diplomas = [
  {
    title: "Master génie physiologique, biotechnologique et informatique (GPHY)",
    subtitle: "Université de Poitiers",
    date: "2022 - 2024",
    text: "Option Biotechnologie",
    img: UnivPoitiers,
  },
  {
    title: "Licence 3 Bioinformatique",
    subtitle: "Université de Poitiers",
    date: "2021 - 2022",
    text: "................",
    img: UnivPoitiers,
  },
  {
    title: "D.U.T. Génie biologique, option Bioinformatique",
    subtitle: "I.U.T Clermont Auvergne / Aurillac",
    date: "2019 - 2021",
    text: "...............",
    img: UnivAurillac,
  },
];

export default function Diplomes() {
  // TODO Ajouter une animation 
  useEffect(() => {
    const cards = document.querySelectorAll(".dipl-card");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach(card => observer.observe(card));
  }, []);

  return (
    <div className="dipl-container animated-bg">


       
      <h1 className="timeline-title">Diplomes / Formations</h1>
      {diplomas.map((diploma, idx) => (
        <div
          key={idx}
          className={`dipl-card ${idx % 2 === 0 ? "left" : "right"}`}
        >
          <img src={diploma.img} alt={diploma.title} className="dipl-img" />
          <div className="dipl-content">
            <div className="dipl-date">{diploma.date}</div>
            <h3 className="dipl-title">{diploma.title}</h3>
            <h4 className="dipl-subtitle">{diploma.subtitle}</h4>
            <p className="dipl-text">{diploma.text}</p>
          </div>
        </div>
      ))}
            
    </div>
  );
}
