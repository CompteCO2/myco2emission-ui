import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Normalize } from "styled-normalize";
import { ThemeProvider, createGlobalStyle } from "styled-components";

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
    font-family: Open-Sans, Helvetica, Sans-Serif;
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
