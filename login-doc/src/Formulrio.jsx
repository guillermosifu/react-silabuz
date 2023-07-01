import { useState } from "react";
import React from "react";

const Formulario = () => {
  const [valorInputs, setValosInputs] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  const [textoMostrado, setTextoMostrado] = useState("");

  const handleInputValues = (e) => {
    //debemos extraer los datos de input
    //e.target.value
    const { name, value } = e.target;

    setValosInputs({
      ...valorInputs,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const texto = `Email: ${valorInputs.email}\nPassword :${valorInputs.password}\nNombre:${valorInputs.nombre}`;
    setTextoMostrado(texto);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
       

        <p>
          <input
            type="text"
            name="email"
            onChange={handleInputValues}
            placeholder="mail"
          />
        </p>
        <p>
          <input
            type="password"
            name="password"
            onChange={handleInputValues}
            placeholder="password"
          />
        </p>
        <p>
          <input type="text" name="nombre" placeholder="nombre"     onChange={handleInputValues}/>
        </p>
        <p>
          <input type="text" name="apellido" placeholder="apellido"     onChange={handleInputValues}/>
        </p>
        <p>
          <button type="submit">Inicia sesion</button>
        </p>
        <h5>{textoMostrado}</h5>
      </form>
    </div>
  );
};

export default Formulario;
