// Page des experiences pro

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import eforLogo from "../assets/icons/efor-group-logo.webp";
import wegaLogo from "../assets/icons/wega-logo.webp";
import irdLogo from "../assets/icons/ird-logo.webp";
import inraLogo from "../assets/icons/inra-logo.webp";

import "../styles/experiences.css";

const Diplomes = ({
  date,
  title,
  subtitle,
  location,
  description,
  textContenu,
  isLeft,
  icon: Icon,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView, mainControls]);

  const renderIcon = () => {
    return typeof Icon === "string" ? (
      <img src={Icon} alt="icon" className="timeline-img" />
    ) : (
      <Icon />
    );
  };

  return (
    <div
      className={`diplome-container ${isLeft ? "left-side" : "right-side"}`}
      ref={ref}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: isLeft ? -50 : 50 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="timeline-item"
      >
        <div className="card timeline-card">
          <div className="card-body-exp">
            <div className="d-flex align-items-center mb-3 experience">
              <div className="timeline-icon me-3">{renderIcon()}</div>
              <div className="titre-experience">
                <h5
                  className="card-title-exp"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <h6
                  className="card-subtitle-exp mb-0"
                  dangerouslySetInnerHTML={{ __html: subtitle }}
                />
                <p className="location-exp mb-0">{location}</p>
              </div>
            </div>

            <p className="text-muted mb-1">{date}</p>
            <p className="card-text">{description}</p>

            {textContenu && (
              <div className="exp-text-container mt-2">
                {textContenu.map((line, i) => (
                  <p
                    key={i}
                    className="exp-text-contenu"
                    dangerouslySetInnerHTML={{ __html: line }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const { t } = useTranslation();

  const timelineData = [
    {
      date: t("experience.exp1.date"),
      title: t("experience.exp1.title"),
      subtitle: t("experience.exp1.subtitle"),
      location: t("experience.exp1.location"),
      textContenu: t("experience.exp1.contenu", { returnObjects: true }),
      icon: eforLogo,
    },
    {
      date: t("experience.exp2.date"),
      title: t("experience.exp2.title"),
      subtitle: t("experience.exp2.subtitle"),
      location: t("experience.exp2.location"),
      description: t("experience.exp2.description"),
      textContenu: t("experience.exp2.contenu", { returnObjects: true }),
      icon: wegaLogo,
    },
    {
      date: t("experience.exp3.date"),
      title: t("experience.exp3.title"),
      subtitle: t("experience.exp3.subtitle"),
      location: t("experience.exp3.location"),
      description: t("experience.exp3.description"),
      textContenu: t("experience.exp3.contenu", { returnObjects: true }),
      icon: irdLogo,
    },
    {
      date: t("experience.exp4.date"),
      title: t("experience.exp4.title"),
      subtitle: t("experience.exp4.subtitle"),
      location: t("experience.exp4.location"),
      description: t("experience.exp4.description"),
      textContenu: t("experience.exp4.contenu", { returnObjects: true }),
      icon: inraLogo,
    },
  ];

  const lineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (lineRef.current) {
        const scrollPercentage =
          (window.scrollY /
            (document.documentElement.scrollHeight - window.innerHeight)) *
          100;
        lineRef.current.style.background = `linear-gradient(to bottom, #364f49 ${scrollPercentage}%, #b5c1ccff ${scrollPercentage}%)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="experience-page">
      <div className="timeline-wrapper-experience">
        <div className="timeline-background">
          <div className="container timeline-wrapper">
            <div className="position-relative">
              <div ref={lineRef} className="timeline-line" />

              {timelineData.map((item, index) => (
                <Diplomes
                  key={index}
                  date={item.date}
                  title={item.title}
                  subtitle={item.subtitle}
                  location={item.location}
                  description={item.description}
                  textContenu={item.textContenu}
                  isLeft={index % 2 === 0}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
