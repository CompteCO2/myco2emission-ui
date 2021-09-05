import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Normalize } from "styled-normalize";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import "i18n/index";
import ConsumingPage from "pages/ConsumingPage";
import { mainTheme } from "config/themes/main";
import LoadingPage from "pages/LoadingPage";
import SelectType from "pages/SelectType";

import "antd/dist/antd.css";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  h2 {
    
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
            <Route path="/:type">
              <SelectType />
            </Route>
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
