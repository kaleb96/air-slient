import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./assets/locales/en_travel_info";
import koTranslation from "./assets/locales/ko_travel_info";

i18n.use(initReactI18next).init({
  fallbackLng: "ko",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { translation: enTranslation },
    ko: { translation: koTranslation },
  },
});

export default i18n;
