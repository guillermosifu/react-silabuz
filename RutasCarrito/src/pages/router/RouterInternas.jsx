import { Route, Routes } from "react-router-dom";
import { RouterPrivate } from "../../routes/RouterPrivate";
import { Dashboard } from "../Dashboard/Dashboard";
import { Configuracion } from "../Configuracion/Configuracion";
import { Page404 } from "../404/Page404";
import { Navbar } from "../../components/Navbar";

export const RouterInternas = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <RouterPrivate>
              <Dashboard />
            </RouterPrivate>
          }
        />
        <Route
          path="/dashboard/configuracion"
          element={
            <RouterPrivate>
              <Configuracion />
            </RouterPrivate>
          }
        />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </>
  );
};
