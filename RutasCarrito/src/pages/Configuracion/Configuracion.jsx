import { useContext } from "react";
import { ContextApp } from "../../context/ContextApp";

export const Configuracion = () => {
  const { cartItems } = useContext(ContextApp);
  return (
    <div>
      Soy la configuracion
      <div>
        RTUS PRODUCTOS
        {cartItems.length === 0 ? (
          <div>No tienes productos</div>
        ) : (
          cartItems.map((car) => (
            <div style={{ display: "flex" }}>
              <img src={car.img} alt="" width={100} height={100} />
              <h1>{car.name}</h1>
              <p>{car.cantidad}</p>
              <button onClick={() => removeItem(car.id)}>
                Eliminar Productos
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
