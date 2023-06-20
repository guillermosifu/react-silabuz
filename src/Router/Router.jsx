import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import React from "react";
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Footer from "../Components/Footer";

const Router = () => {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/inicio" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Router;
