import i18n from "i18next";
import Cookies from "js-cookie";
import { initReactI18next } from "react-i18next";

const lng = Cookies.get("language") || "en";

console.log("Current language:", lng);

i18n.use(initReactI18next).init({
	lng,
	fallbackLng: "en",
	resources: {
		en: {
			translation: require("../app/locales/en/translation.json")
		},
		fr: {
			translation: require("../app/locales/fr/translation.json")
		}
	},
	interpolation: {
		escapeValue: false
	}
});

export default i18n;
