import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './translations/en.json';
import sk from './translations/sk.json';

export const resources = {
    en,
    sk
};

i18n.use(initReactI18next).init({
    resources,
    debug: false,
    fallbackLng: 'en',
    defaultNS: 'translation',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;
