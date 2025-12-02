// Toogle for language

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageToggle() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language.toUpperCase());

  const toggleLang = () => {
    const newLang = lang === "FR" ? "EN" : "FR";
    setLang(newLang);
    i18n.changeLanguage(newLang.toLowerCase());
    localStorage.setItem("siteLang", newLang.toLowerCase());
  };

  return (
    <button className="btn-circle" onClick={toggleLang} title="Toggle language">
      {lang}
    </button>
  );
}

export default LanguageToggle;
