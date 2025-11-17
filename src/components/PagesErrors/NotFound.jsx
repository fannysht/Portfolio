import React from "react";
import { Link } from "react-router-dom";
import "../../styles/errorpage.css";
import notFoundImg from "../../assets/images/Panda_not_found_dessin.png";

function NotFound() {
  return (
    <section className="error-page">
      <img src={notFoundImg} alt="Error 404" />
      <h1>Error 404</h1>
      <h2>Page Not Found</h2>
      <p>
        Oops! The page you are looking for doesn’t exist.
        <br />
        It might have been moved, removed, or never existed.
      </p>

      <Link to="/" className="btn-home">
        Back to homepage
      </Link>
    </section>
  );
}

export default NotFound;
