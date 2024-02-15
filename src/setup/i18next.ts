import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { locales } from '../assets/languages'

// const langCodes = Object.keys(locales);
const resources = Object.fromEntries(
  Object.entries(locales).map((entry) => [entry[0], { translation: entry[1] }])
)

i18n.use(initReactI18next).init({
  debug: true,
  resources,
  lng: 'es'
})
// fallbackLng: "en",
export default i18n
