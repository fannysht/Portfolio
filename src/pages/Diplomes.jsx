// Page des diplomes / education

import React, { useEffect } from "react";
import "../styles/diplomes.css";
import StarsBackground from "../components/StarsBackground";
import { useTranslation } from "react-i18next";

import UnivPoitiers from "../assets/images/Univ_Poitiers_small.webp";
import UnivAurillac from "../assets/images/Univ_Aurillac_small.webp";

export default function Diplomes() {
  const { t } = useTranslation(); //  pour i18n

  // Liste des diplômes
  const diplomas = [
    {
      title: t("diplomes.master2Title"),
      subtitle: t("diplomes.master2School"),
      date: "2023 - 2024",
      text: t("diplomes.master2Option"),
      textContenu: t("diplomes.master2Contenu", { returnObjects: true }),
      img: UnivPoitiers,
    },
    {
      title: t("diplomes.master1Title"),
      subtitle: t("diplomes.master1School"),
      date: "2022 - 2023",
      text: t("diplomes.master1Option"),
      textContenu: t("diplomes.master1Contenu", { returnObjects: true }),
      img: UnivPoitiers,
    },
    {
      title: t("diplomes.licenceTitle"),
      subtitle: t("diplomes.licenceSchool"),
      date: "2021 - 2022",
      textContenu: t("diplomes.licenceContenu", { returnObjects: true }),
      img: UnivPoitiers,
    },
    {
      title: t("diplomes.dutTitle"),
      subtitle: t("diplomes.dutSchool"),
      date: "2019 - 2021",
      textContenu: t("diplomes.dutContenu", { returnObjects: true }),
      img: UnivAurillac,
    },
  ];

  // Animation des cartes
  useEffect(() => {
    const cards = document.querySelectorAll(".dipl-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (entry) => entry.isIntersecting && entry.target.classList.add("show")
        );
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
  }, []);

  return (
    <div className="dipl-page">
      {/* Background */}
      <StarsBackground />

      <div className="dipl-container animated-bg">
        {/* <h1 className="timeline-title">{t("diplomes.pageTitle")}</h1> */}

        {/* Boucle pour générer chaque diplôme */}
        {diplomas.map((diplomes, idx) => (
          <div
            key={idx}
            className={`dipl-card ${idx % 2 === 0 ? "left" : "right"}`}
          >
            {/* Image */}
            <img src={diplomes.img} alt={diplomes.title} className="dipl-img" />

            {/* Contenu texte du diplôme */}
            <div className="dipl-content">
              <div className="dipl-date">{diplomes.date}</div>
              <h3 className="dipl-title">{diplomes.title}</h3>
              <h4 className="dipl-subtitle">{diplomes.subtitle}</h4>

              {diplomes.text && (
                <p className="dipl-text-option">{diplomes.text}</p>
              )}

              {Array.isArray(diplomes.textContenu) && (
                <div className="dipl-text-container">
                  {diplomes.textContenu.map((line, i) => (
                    <p
                      key={i}
                      className="dipl-text-contenu"
                      dangerouslySetInnerHTML={{ __html: line }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
