import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Navbar } from "../components/Navbar";
import { RouterInternas } from "../pages/router/RouterInternas";

export const RouterApp = () => {
  return (

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<RouterInternas />} />
      </Routes>
 
  );
};
