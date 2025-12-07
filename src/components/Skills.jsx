// Skills component

import React from "react";
import "../styles/index.css";
import { useTranslation } from "react-i18next";
import useScrollReveal from "./useScrollReveal";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloud,
  FaTools,
  FaUsers,
  FaPalette,
  FaDna,
  FaMicroscope,
  FaFlask,
  FaProjectDiagram
} from "react-icons/fa";

export default function Skills() {
  useScrollReveal();
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: "Front-End",
      icon: FaReact,
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Vue.js",
        "Bootstrap",
        "Vite",
        "Git / GitHub / GitLab",
      ],
    },
    {
      title: "Back-End",
      icon: FaNodeJs,
      skills: [
        "Node.js",
        "Python",
        "PHP (Symfony)",
        "Java",
        "API REST",
        "Android Studio",
      ],
    },
    {
      title: t("home.titreBDD"),
      icon: FaDatabase,
      skills: ["MySQL", "SQLite", "Oracle DB", "PostgreSQL", "MongoDB"],
    },
    {
      title: t("home.titreCloud"),
      icon: FaCloud,
      skills: ["Docker", "Grafana", "ELK Stack", "CI/CD", "Azure DevOps"],
    },
    {
      title: t("home.titreQualite"),
      icon: FaTools,
      skills: ["Pytest", "PHPUnit", "JUnit", "Selenium"],
    },
    {
      title: t("home.titreCollab"),
      icon: FaUsers,
      skills: [
        "Jira",
        "Trello",
        "Notion",
        "Slack",
        "Confluence",
        "Power BI",
        t("home.suiteOffice"),
        "LaTeX",
      ],
    },
    {
      title: t("home.titreDesign"),
      icon: FaPalette,
      skills: [
        "Figma",
        "Canva",
        "Krita",
        "Piano Analytics",
        "Google Analytics",
      ],
    },
    {
      title: t("home.titreBioinfo"),
      icon: FaDna,
      skills: [
        "Galaxy",
        "Geo2R Sequencing",
        "R",
        "BLAST",
        "Mega",
        "NCBI",
        "Cytoscape",
        "Clustal Omega",
        "DESeq2",
        "ChimeraX",
        "IGV (Integrative Genomics Viewer)",
        "Conda / Bioconda",
      ],
    },
    {
      title: t("home.titreBiologie"),
      icon: FaMicroscope,
      skills: [
        t("home.labAnalysis"),
        t("home.labTechniques"),
        t("home.fundamentalBio"),
        t("home.microImmuno"),
        t("home.appliedBio"),
        t("home.evolSystem"),
        t("home.structOmics"),
      ],
    },
    {
      title: t("home.titreLaboratoire"),
      icon: FaFlask,
      skills: [
        "GMP / GLP",
        "GAMP5",
        t("home.csv"),
        "LIMS (Laboratory Information Management System)",
      ],
    },
    {
      title: t("home.titreGestion"),
      icon: FaProjectDiagram,
      skills: ["Agile", t("home.iso")],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2>{t("home.skillsTitre")}</h2>
      <div className="skills-container">
        {skillCategories.map((category, idx) => {
          const BgIcon = category.icon;
          return (
            <div className="skills-category" key={idx}>
              {/* Icône de fond */}
              <div className="category-icon-bg">
                <BgIcon className="bg-icon" />
              </div>

              {/* Header avec icône principale et titre */}
              <div className="category-header">
                <h3>{category.title}</h3>
              </div>

              <ul>
                {category.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
