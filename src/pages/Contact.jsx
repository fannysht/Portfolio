// Page de contact

import React from "react";
import "../styles/contact.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import photoProfil from "../assets/images/photo_small_contact.webp";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="page-contact">
      <section className="contact-container">
        <div className="contact-left-container">
          {/* Image */}
          <div className="blob-back"></div>
          <img
            src={photoProfil}
            alt={t("contact.photoAlt")}
            className="blob-photo"
            fetchPriority="high"
          />
        </div>

        {/* Texte */}
        <div className="contact-right">
          <h1 className="contact-title">{t("contact.title")}</h1>
          <p className="contact-text">
            {t("contact.text1")} <br />
            <br />
            {t("contact.text2")}
          </p>

          {/* Reseaux */}
          <div className="contact-links-container">
            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/fanny-schott"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/fannysht"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-social"
                title="GitHub"
              >
                <FaGithub />
              </a>
            </div>

            {/* <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cv"
          >
            {t("contact.cvButton")}
          </a> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
