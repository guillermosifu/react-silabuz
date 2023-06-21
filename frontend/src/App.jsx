import { useState } from "react";

import Prueba2 from "./Components/Prueba2";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Router from "./Router/router";

function App() {
  const [count, setCount] = useState(100);

  return (
    <>
      <Router />
    </>
  );
}

export default App;
