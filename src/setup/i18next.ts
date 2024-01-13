import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { locales } from "../assets/languages";

//const langCodes = Object.keys(locales);
const resources = Object.fromEntries(
  Object.entries(locales).map((entry) => [entry[0], { translation: entry[1] }])
);

i18n.use(initReactI18next).init({
  fallbackLng: "es",
  debug: true,
  resources,
});

export default i18n;
