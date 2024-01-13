import en from "./locales/en.json";
import es from "./locales/es.json";

export const locales = {
  es,
  en,
};
export type Locales = keyof typeof locales;
