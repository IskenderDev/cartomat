import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import RU from "./json/ru.json";
import EN from "./json/en.json";
import KG from "./json/kg.json";

i18n.use(initReactI18next).init({
  debug: false,
  fallbackLng: "kg",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ru: {
      translation: RU,
    },
    en: {
      translation: EN,
    },
    kg: {
      translation: KG,
    },
  },
});

export default i18n;
