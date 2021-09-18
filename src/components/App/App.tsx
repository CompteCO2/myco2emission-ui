import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Normalize } from "styled-normalize";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import "i18n/index";
import ConsumingPage from "pages/ConsumingPage/ConsumingPage";
import { mainTheme } from "config/themes/main";
import LoadingPage from "pages/LoadingPage/LoadingPage";
import SelectTypePage from "pages/SelectTypePage/SelectTypePage";

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
              <SelectTypePage />
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
