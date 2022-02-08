import i18next from "i18next";
import HttpApi from "i18next-http-backend";
import config from "config/index.json";
import { initReactI18next } from "react-i18next";

import Cookies from "js-cookie";

export const getDefaultLang = (): string => {
  return Cookies.get("lang") ?? config.defaultLang;
};

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    fallbackLng: getDefaultLang(),
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18next;
