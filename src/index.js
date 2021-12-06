import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/app.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
