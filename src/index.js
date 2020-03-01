import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import { HashRouter } from "react-router-dom";
import "Styles/sanitize.css";
import "Styles/globalStyles.css";
import "Styles/fonts/stylesheet.css";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
