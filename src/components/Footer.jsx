// Footer

import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container d-flex justify-content-between align-items-center py-3 container-footer">
        <span className="footer-text">
          &copy; {new Date().getFullYear()} - Made with ❤️ by Fanny
        </span>
        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/fanny-schott"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          // TODO /* A Ajouter - GitHub */
          <a
            href="error"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
