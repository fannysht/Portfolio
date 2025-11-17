import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";
import photoProfil from "../assets/images/photo.JPG";

function Contact() {
  return (
    <section className="contact-container">
<div className="contact-left-container">
  {/* Blob de fond */}
  <div className="blob-back"></div>

  {/* Photo animée */}
  <img src={photoProfil} alt="Profil" className="blob-photo" />
</div>





      <div className="contact-right">
        <h1 className="contact-title">Me contacter</h1>
        <p className="contact-text">
          N’hésitez pas à me contacter via les liens ci-dessous. <br />
          Je ferai de mon mieux pour vous répondre rapidement !
          <br /> <br />
          N’hésite pas à me contacter via mes réseaux :
        </p>

        <div className="contact-links-container">
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/fanny-schott"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-social"
              title="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
    {/* A Ajouter - GitHub */}
            <a
              href="error"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-social"
              title="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>

          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cv"
          >
            Voir mon CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
