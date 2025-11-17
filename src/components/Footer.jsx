// src/components/Footer.jsx
import React from "react";
import "../styles/index.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <span className="footer-text">&copy; {new Date().getFullYear()} - Made with ❤️ by Fanny</span>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/fanny-schott" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
          {/* A Ajouter - GitHub */}
          <a href="error" target="_blank" rel="noopener noreferrer" title="GitHub">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
