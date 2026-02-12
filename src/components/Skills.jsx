import React from "react";
import "../styles/index.css";
import { useTranslation } from "react-i18next";
import useScrollReveal from "./useScrollReveal";
import {
  FaDna,
  FaDatabase,
  FaFlask,
  FaMicroscope,
  FaProjectDiagram,
  FaCode,
} from "react-icons/fa";

export default function Skills() {
  useScrollReveal();
  const { t } = useTranslation();

  const skillCategories = [
    {
      title: t("home.bioinfOmicsTitle"),
      icon: FaDna,
      skills: [
        { main: t("home.analysesRNA"), details: "DESeq2, Geo2R" },
        { main: t("home.genomics"), details: "BLAST, NCBI, Mega, Clustal Ω" },
        {
          main: t("home.pipelinesWorkflows"),
          details: "Snakemake, Conda, Galaxy",
        },
        { main: t("home.visualization"), details: "Cytoscape, IGV, ChimeraX" },
        { main: t("home.structOmics"), details: null },
      ],
    },
    {
      title: t("home.devWebTitle"),
      icon: FaCode,
      skills: [
        { main: "Python", details: "Pandas, NumPy, Pytest" },
        { main: "R", details: t("home.statsGraphics") },
        { main: "JavaScript", details: "React.js, Vue.js, Node.js" },
        { main: "PHP", details: "Symfony" },
        { main: t("home.javaApi"), details: null },
      ],
    },
    {
      title: t("home.dataCloudTitle"),
      icon: FaDatabase,
      skills: [
        {
          main: t("home.titreBDD"),
          details: "PostgreSQL, MySQL, MongoDB, Oracle, SQLite",
        },
        { main: t("home.containerization"), details: "Docker" },
        { main: "CI/CD & DevOps", details: "Azure, GitLab, GitHub" },
        { main: "Monitoring", details: "Grafana, ELK Stack" },
      ],
    },
    {
      title: t("home.qualityLabTitle"),
      icon: FaFlask,
      skills: [
        { main: t("home.dataManagement"), details: "LIMS" },
        { main: t("home.systemValidation"), details: "CSV, GAMP5" },
        { main: t("home.regulatoryCompliance"), details: "GMP / GLP" },
        { main: t("home.titreQualite"), details: "Selenium, JUnit" },
      ],
    },
    {
      title: t("home.lifeSciencesTitle"),
      icon: FaMicroscope,
      skills: [
        { main: t("home.microImmuno"), details: null },
        { main: t("home.labAnalysisTechniques"), details: null },
        { main: t("home.molBioGenetics"), details: null },
        { main: t("home.evolSystem"), details: null },
      ],
    },
    {
      title: t("home.managementAnalysisTitle"),
      icon: FaProjectDiagram,
      skills: [
        { main: t("home.titreGestion"), details: t("home.agileScrum") },
        { main: "Data Viz", details: "Power BI, Piano/Google Analytics" },
        { main: "Design", details: "Figma, Canva, Krita" },
        { main: t("home.scientificWriting"), details: "LaTeX" },
      ],
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
              <div className="category-icon-bg">
                <BgIcon className="bg-icon" />
              </div>

              <div className="category-header">
                <h3>{category.title}</h3>
              </div>

              <ul>
                {category.skills.map((skill, i) => (
                  <li key={i}>
                    <strong>{skill.main}</strong>
                    {skill.details && (
                      <span className="skill-details"> ({skill.details})</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
