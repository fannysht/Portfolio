import React from "react";
import "../../styles/errorpage.css";

function IndispoSite() {
  return (
    <section className="error-page">
      <h1>Site unavailable</h1>
      <p>
        Something went wrong on our end.
        <br />
        The site might be temporarily unavailable. Please try again later.
      </p>
    </section>
  );
}

export default IndispoSite;
