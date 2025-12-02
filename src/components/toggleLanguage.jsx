import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ToggleLanguage = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(() => {
  const saved = localStorage.getItem('siteLang') || i18n.language;
  return saved.split('-')[0].toUpperCase();
});

  useEffect(() => {
    const savedLang = localStorage.getItem('siteLang');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
      setLang(savedLang.toUpperCase());
    }
  }, [i18n]);

  const toggleLang = () => {
  const newLang = lang === 'FR' ? 'en' : 'fr';
  setLang(newLang.toUpperCase());
  i18n.changeLanguage(newLang);
  localStorage.setItem('siteLang', newLang);
};

  return (
    <button className="btn-circle" onClick={toggleLang}>
      {lang}
    </button>
  );
};

export default ToggleLanguage;