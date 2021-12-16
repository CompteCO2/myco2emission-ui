import React from "react";
import ReactDOM from "react-dom";
import App from "components/App/App";
import { RootStoreProvider } from "providers/RootStoreProvider";

ReactDOM.render(
  <React.StrictMode>
    <RootStoreProvider>
      <App />
    </RootStoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
