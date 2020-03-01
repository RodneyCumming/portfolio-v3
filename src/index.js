import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import { HashRouter } from "react-router-dom";
import "Styles2/sanitize.css";
import "Styles2/globalStyles.css";
import "Styles2/fonts/stylesheet.css";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
