// Skills component

import React from "react";
import "../styles/index.css";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: "Front-End",
      icon: "bi-laptop",
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
      icon: "bi-server",
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
      icon: "bi-database",
      skills: ["MySQL", "SQLite", "Oracle DB", "PostgreSQL", "MongoDB"],
    },
    {
      title: t("home.titreCloud"),
      icon: "bi-cloud-upload",
      skills: ["Docker", "Grafana", "ELK Stack", "CI/CD", "Azure DevOps"],
    },
    {
      title: t("home.titreQualite"),
      icon: "bi-check-circle",
      skills: ["Pytest", "PHPUnit", "JUnit", "Selenium"],
    },
    {
      title: t("home.titreCollab"),
      icon: "bi-people",
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
      icon: "bi-palette",
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
      icon: "bi-cpu",
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
      icon: "bi-heart-pulse",
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
      icon: "bi-building",
      skills: [
        "GMP / GLP",
        "GAMP5",
        t("home.csv"),
        "LIMS (Laboratory Information Management System)",
      ],
    },
    {
      title: t("home.titreGestion"),
      icon: "bi-diagram-3",
      skills: ["Agile", t("home.iso")],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2>{t("home.skillsTitre")}</h2>
      <div className="skills-container">
        {skillCategories.map((category, idx) => (
          <div className="skills-category" key={idx}>
            <div className="category-header">
              <i className={`bi ${category.icon} category-icon`}></i>
              <h3>{category.title}</h3>
            </div>
            <ul>
              {category.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
