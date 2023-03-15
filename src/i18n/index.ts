import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';
import en from './locales/en.json';
import es from './locales/es.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  lng: 'es',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en,
    es,
  },
  load: 'languageOnly',
  lowerCaseLng: true,
  supportedLngs: ['en', 'es'],
});

export default i18n;
