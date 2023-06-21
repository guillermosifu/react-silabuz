import { useState } from "react";

//hooks  useState = manipula el estado de la una variable
// el primer paso para definir un componenet es el l nombre
//debe inciiar siempre con mayuscula
//todo componenete es una funcion

const Ejemplo = () => {
  const [count, setCount] = useState(100);

  //crearemos dos funciones una sumara y otra restara

  const sumar = () => setCount(count + 1);
  const restar = () => setCount(count - 1);
  const reset = () => setCount(150);

  //siempre debe ir un return y dentro el esquema del componente
  return (
    //siempre un contenedro padre
    //fragment react
    <>
      <h1>funcion de Ejemplo</h1>
      <h4>aca se cunple a funcion</h4>
      <span>{count}</span>
      <div>
        {" "}
        <button onClick={sumar}>Sumar</button>
        <button onClick={reset}>reset</button>
        <button onClick={restar}>restar</button>
      </div>
    </>
  );
};

export default Ejemplo;
