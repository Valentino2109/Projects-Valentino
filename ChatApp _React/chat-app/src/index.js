import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// CSS imports
import "./HeaderText/HeaderText.css";
import "./LogIn/LogIn.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
