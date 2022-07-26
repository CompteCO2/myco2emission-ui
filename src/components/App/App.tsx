import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Normalize } from "styled-normalize";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Cookies from "js-cookie";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "i18n/index";
import ConsumingPage from "pages/ConsumingPage/ConsumingPage";
import { mainTheme } from "config/themes/main";
import LoadingPage from "pages/LoadingPage/LoadingPage";
import SelectTypePage from "pages/SelectTypePage/SelectTypePage";

import "antd/dist/antd.min.css";

const GlobalStyle = createGlobalStyle`
  :root {
    --brand-color1: #cb287d;
    --brand-color2: #838383;
    --brand-color3: #0a7dc0;
    --brand-color4: rgb(21, 73, 147);
  }

  body {
    font-family: 'Roboto', cursive;
    background-color: #f8f8f8;
  }
  #root {
    width: 420px;
    margin: auto;
  }

  h2 {

  }

  p {
    text-align: center;
  }


  .ant-slider-handle {
    width: 25px;
    height: 25px;
    top: -2px;

    border-color: var(--brand-color1);
  }

  .ant-slider-track {
    background-color: var(--brand-color1);
  }

  .ant-slider {
    &:hover {
      .ant-slider-handle {
        border-color: var(--brand-color1) !important;
      }

      .ant-slider-track {
        background-color: var(--brand-color1) !important;
      }
    }
  }
`;

const App = (): JSX.Element => {
  const url = new URL(window.location.href);
  const lang = url.searchParams.get("lang");
  const { t } = useTranslation();

  // Handle Lang Params & Meta Data
  useEffect(() => {
    if (!lang) {
      return;
    }
    Cookies.set("lang", lang);
    i18next.changeLanguage(lang);
  }, [lang]);

  return (
    <ThemeProvider theme={mainTheme}>
      <Suspense fallback={<LoadingPage />}>
        <HelmetProvider>
          <Helmet>
            <title>{t("meta.title")}</title>
            <meta name="description" content={t("meta.description")} />
            <meta name="url" content={t("meta.url")} />
            <meta name="image" content={t("meta.image")} />
            <meta
              name="author"
              content="Andrei Makar-Uvarov - Michaël Jeulin-Lagarrigue"
            />

            <meta
              property="og:title"
              content={`${t("meta.title")} | Compte CO2`}
            />
            <meta property="og:image" content={t("meta.image")} />
            <meta property="og:description" content={t("meta.description")} />
            <meta property="og:url" content={t("meta.url")} />

            <meta property="og:type" content="website" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:locale:alternate" content="fr_FR" />
            <meta property="og:website" content={t("meta.url")} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content={"summary_large_image"} />
            <meta name="twitter:creator" content={"@CompteCo2"} />
            <meta name="twitter:image" content={t("meta.image")} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:description" content={t("meta.description")} />
            <meta
              name="twitter:title"
              content={`${t("meta.title")} | Compte CO2`}
            />
          </Helmet>

          <GlobalStyle />
          <Normalize />
          <Router>
            <Switch>
              <Route path="/:type">
                <SelectTypePage />
              </Route>
              <Route path="/">
                <ConsumingPage />
              </Route>
            </Switch>
          </Router>
        </HelmetProvider>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
