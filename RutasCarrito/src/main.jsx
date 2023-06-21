import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContextProvider } from "./context/ContextApp.jsx";
import { BrowserRouter } from "react-router-dom";
import { RouterApp } from "./routes/RouterApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextProvider>
      <React.StrictMode>
        <RouterApp />
      </React.StrictMode>
    </ContextProvider>
  </BrowserRouter>
);
