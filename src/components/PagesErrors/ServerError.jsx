// src/components/ServerError.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/errorpage.css";
import serverErrorImg from "../../assets/images/server_error_image.png";

function ServerError() {
  return (
    <section className="error-page">
      <img src={serverErrorImg} alt="Error 500" />
      <h1>Error 500</h1>
      <h2>Internal Server Error</h2>
      <p>
        Oops! Something went wrong on our side. <br />
        Don’t worry, we will fix that <br />
      </p>
      <Link to="/" className="btn-home">
        Back to homepage
      </Link>
    </section>
  );
}

export default ServerError;
