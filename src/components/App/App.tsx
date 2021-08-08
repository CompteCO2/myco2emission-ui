import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Normalize } from "styled-normalize";

import "i18n/index";
import ConsumingPage from "pages/ConsumingPage";

const App = (): JSX.Element => {
  return (
    <>
      <Normalize />
      <Router>
        <Switch>
          <Route path="/">
            <ConsumingPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
