// Configuration i18n pour React : gestion des langues (fr/en) avec détection automatique.

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translations_en.json";
import translationFR from "./locales/fr/translations_fr.json";

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fr",
    interpolation: { escapeValue: false },
  });

export default i18n;
