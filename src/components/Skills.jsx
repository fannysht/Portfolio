import React from "react";
import "../styles/index.css";

export default function Skills() {
  const skillCategories = [
   {
    title: "Front-end",
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
    title: "Back-end",
    icon: "bi-server",
    skills: [
      "Node.js",
      "Python",
      "PHP (Symfony)",
      "Java",
      "API REST",
    ],
  },
  {
    title: "Bases de données",
    icon: "bi-database",
    skills: [
      "MySQL",
      "SQLite",
      "Oracle DB",
      "PostgreSQL",
      "MongoDB"
    ],
  },
  {
    title: "DevOps / Cloud / Déploiement",
    icon: "bi-cloud-upload",
    skills: [
      "Docker",
      "Grafana",
      "ELK Stack",
      "CI/CD",
      "Azure DevOps"
    ],
  },
  {
    title: "Tests / Assurance qualité",
    icon: "bi-check-circle",
    skills: [
      "Pytest",
      "PHPUnit",
      "JUnit",
      "Selenium"
    ],
  },
  {
    title: "Collaboration & Productivité",
    icon: "bi-people",
    skills: [
      "Jira",
      "Trello",
      "Notion",
      "Slack",
      "Confluence",
      "Power BI",
      "Suite Office (Word, Excel, PowerPoint...)",
      "LaTeX"
    ],
  },
  {
    title: "Design & Analyse",
    icon: "bi-palette",
    skills: [
      "Figma",
      "Canva",
      "Piano Analytics",
      "Google Analytics"
    ],
  },
  {
    title: "Bioinformatique",
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
      "Conda / Bioconda"
    ],
  },
  {
    title: "Biologie",
    icon: "bi-heart-pulse",
    skills: [
      "Analyse de laboratoire",
      "Techniques de laboratoire",
      "Biologie fondamentale",
      "Microbiologie et immunologie",
      "Biologie appliquée et biotechnologie",
      "Biologie évolutive et systématique",
      "Biologie structurale et omiques"
    ],
  },
  {
    title: "Laboratoire & Régulations",
    icon: "bi-building",
    skills: [
      "Régulations GMP/GLP",
      "GAMP5",
      "CSV (Validation des systèmes informatisés)",
      "LIMS (Laboratory Information Management System)"
    ],
  },
  {
    title: "Gestion de projet",
    icon: "bi-diagram-3",
    skills: [
      "Agile",
      "Normes ISO"
    ],
  }
];



  return (
    <section className="skills-section" id="skills">
      <h2>Mes compétences</h2>
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
