import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Normalize } from "styled-normalize";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import "i18n/index";
import ConsumingPage from "pages/ConsumingPage";
import { mainTheme } from "config/themes/main";
import LoadingPage from "pages/LoadingPage";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  h1 {
    font-size: 5vh;
    font-weight: normal;
    text-align: center;
  }
  h2 {
    text-align: center;
  }
  p {
    text-align: center;
  }
`;

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={mainTheme}>
      <Suspense fallback={<LoadingPage />}>
        <GlobalStyle />
        <Normalize />
        <Router>
          <Switch>
            <Route path="/">
              <ConsumingPage />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
