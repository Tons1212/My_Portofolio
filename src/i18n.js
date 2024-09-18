// config traduction i18n
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importer les fichiers de traduction
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(LanguageDetector) // Détection automatique de la langue (navigateur)
  .use(initReactI18next) // Liaison avec React
  .init({
    resources,
    fallbackLng: 'fr', // Langue par défaut
    interpolation: {
      escapeValue: false // React se charge déjà d'échapper les valeurs
    }
  });

export default i18n;
