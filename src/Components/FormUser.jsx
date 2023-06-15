import { useState } from "react";

const FormUser = () => {
  const [valorDeInputs, setValorDeInputs] = useState({
    nombre: "",
    apellido: "",
    password: "",
  });



  const handleInputValues = (e) => {
    //debemos extraer 2 cossas del input
    //name de cada input
    //el value de cada input
    // name = e.target.value

    const { name, value } = e.target;

    setValorDeInputs({
      ...valorDeInputs,
      [name]: value,
    });
  };

  return (
    <div>
      <form action="">
        <h4>Nombre: {valorDeInputs.nombre}</h4>
        <h4>Apellido: {valorDeInputs.apellido}</h4>
        <h4>password:</h4>

        <div>
          <input
            type="text"
            name="nombre"
            placeholder="ingresa tu nombre"
            onChange={handleInputValues}
          />
        </div>
        <div>
          <input
            type="text"
            name="apellido"
            placeholder="ingresa tu apellido"
            onChange={handleInputValues}
          />
        </div>
        <div>
          <input type="password" name="password" placeholder="ingres tu pass" />
        </div>
        <div>
          <button>Registrar</button>
        </div>
      </form>
    </div>
  );
};

export default FormUser;
