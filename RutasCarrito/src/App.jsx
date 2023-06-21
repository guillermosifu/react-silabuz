import { useContext, useState } from "react";
import Componente2 from "./Componente2";
import { ContextApp } from "./context/ContextApp";


function App() {
  const [apellido, setApellido] = useState("")
  const {nomnbreContex} = useContext(ContextApp)
  return (
    <div>
      <div>Clase UseContext Aplelido {apellido}</div>
      <div>SOY EL CONTEXT DE APP {nomnbreContex}</div>
      <Componente2 nombre="Martin" setApellido={setApellido} />
    </div>
  );
}

export default App;
