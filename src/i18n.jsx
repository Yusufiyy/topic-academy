import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import uzTr from "../public/locales/uz.json";
import enTr from "../public/locales/en.json";
import ruTr from "../public/locales/ru.json";

const lg = localStorage.getItem('i18nextLng') || "uz"

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: lg,
    debug: true,
    resources:{
        uz:{translation: uzTr},
        ru:{translation: ruTr},
        en:{translation: enTr}
    }
  });


export default i18n;