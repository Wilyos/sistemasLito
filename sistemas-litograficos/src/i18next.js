import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import es from './es.json';
import en from './en.json';


i18next
    .use(initReactI18next)
    .init( {
        resources: {
            es: {traslation: es},
            en: {traslation: en}
        },
        lng: 'es',
        fallbackLng: 'es',
        interpolation: {escapeValue: false}   
    });


    export default i18next;