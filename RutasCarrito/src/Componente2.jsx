import { useContext } from "react";
import { ContextApp } from "./context/ContextApp";

export default function Componente2({nombre, setApellido}) {

    const {nomnbreConte, setNombreContext} = useContext(ContextApp)


    const darApellido = () =>{
      setNombreContext("PEPEITO")
    }

    return (
      <div>
        <div>Soy el componente 2 {nombre}</div>
        <button onClick={darApellido}>DAR APELLIDO</button>
      </div>
    );
  }