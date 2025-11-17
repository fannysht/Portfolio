import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import "../styles/index.css";


// Composant pour chaque diplôme/expérience
const Diplomes = ({ date, title, subtitle, location, description, isLeft, icon: Icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) mainControls.start("visible");
  }, [isInView, mainControls]);

  return (
    // TODO Ajouter une animation 
    <div className={`diplome-container ${isLeft ? "left-side" : "right-side"}`} ref={ref}>
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
          <div className="card-body">
            <div className="d-flex align-items-center mb-3">
              <div className="timeline-icon me-3">
                <Icon />
              </div>
              <div>
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-0">{subtitle}</h6>
                <p className="location mb-0">{location}</p>
              </div>
            </div>
            <p className="text-muted mb-1">{date}</p>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Composant principal Experience
const Experience = () => {
  const timelineData = [
    {
      date: "janvier 2025 - Present",
      title: "Consultant IT & CSV",
      subtitle: "Efor",
      location: "Strasbourg - France",
      description: "................",
      icon: FaGraduationCap,
    },
    {
      date: "mai 2023 - septembre 2024",
      title: "Consultant CSV, LIMS & Ingénieur IT",
      subtitle: "wega Informatik AG",
      location: "Bâle - Suisse",
      description: "Stage de Master 1 et 2",
      icon: FaGraduationCap,
    },
    {
      date: "mai 2022 - juillet 2022",
      title: "Analyse bioinformatique des loci CRISPR à l’échelle du genre dans la bactérie Xanthomonas",
      subtitle: "Institut national de recherche et de développement (IRD)",
      location: "Montpellier - France",
      description: "Stage de licence 3",
      icon: FaGraduationCap,
    },
    {
      date: "mars 2021 - juin 2021",
      title: "Analyse et comparaisons des génomes de bactéries isolées du microbiote humain",
      subtitle: "Institut national de la recherche agronomique (INRA)",
      location: "Saint-Gènes-Champanelle - France",
      description: "Stage de D.U.T",
      icon: FaGraduationCap,
    },
  ];

  const lineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (lineRef.current) {
        const scrollPercentage =
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        lineRef.current.style.background = `linear-gradient(to bottom, #364f49 ${scrollPercentage}%, #b5c1ccff ${scrollPercentage}%)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="timeline-wrapper-experience">
      <div className="timeline-background">
        <div className="container timeline-wrapper">
          <h1 className="timeline-title">Expériences professionnelles</h1>
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
                isLeft={index % 2 === 0}
                icon={item.icon}
              />
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Experience;
