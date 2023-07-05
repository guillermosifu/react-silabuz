import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Formulario from "./Formulrio.jsx";
import { UserProvider } from "./Context/UserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
);
