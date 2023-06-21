import { useContext } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ContextApp } from "../../context/ContextApp";

export const Login = () => {
  const inputRef = useRef(null);
  const { setNombreUsuario } = useContext(ContextApp);
  const navigate = useNavigate();

  const ingresarDash = (e) => {
    e.preventDefault();
    const nombre = inputRef.current.value;
    if (nombre !== "") {
      setNombreUsuario(nombre);
      navigate("/dashboard", { replace: true , state: {logged: true}});
    }
  };

  return (
    <div>
      <form action="" onSubmit={ingresarDash}>
        <input type="text" placeholder="Ingrese tu nombre" ref={inputRef} />
        <button>Ingresar</button>
      </form>
    </div>
  );
};
