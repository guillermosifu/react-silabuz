import { useContext } from "react";
import { ContextApp } from "../../context/ContextApp";
import { ModalProducts } from "../../components/ModalProducts";

export const Dashboard = () => {
  const { nombreUsuario, addCart, cartItems, removeItem } = useContext(ContextApp);

  const productos = [
    {
      id: 1,
      name: "Leche Gloria",
      precio: 7.5,
      fechaVencimiento: "31/06/2023",
      img: "https://th.bing.com/th/id/R.49a35877423a0bd63236c3979000ceed?rik=B6TO8k7pI%2b%2bs8Q&pid=ImgRaw&r=0",
    },
    {
      id: 2,
      name: "Jamonada de Chancho",
      precio: 20.5,
      fechaVencimiento: "01/07/2023",
      img: "https://th.bing.com/th/id/OIP.WrbZrdpP0WglJ_TmnJaPlwHaHa?pid=ImgDet&rs=1",
    },
    {
      id: 3,
      name: "Mermelada Gloria",
      precio: 15.5,
      fechaVencimiento: "10/07/2023",
      img: "https://plazavea.vteximg.com.br/arquivos/ids/169248-1000-1000/58156.jpg?v=635769969072130000",
    },
    {
      id: 4,
      name: "Queso Gloria",
      precio: 8.5,
      fechaVencimiento: "25/06/2023",
      img: "https://th.bing.com/th/id/R.50368b03d2fa737625e9467d7c2b8d36?rik=oN%2fDukj4W%2f%2fhSg&pid=ImgRaw&r=0",
    },
  ];


  return (
    <div>
      <div>Bienenido usuario {nombreUsuario}</div>
      <h1>PRODUCTOS A LA VENTA</h1>

      <ModalProducts product={cartItems} />

      <div>
        RTUS PRODUCTOS
        {
          cartItems.length === 0 ? <div>No tienes productos</div> : (
            cartItems.map((car)=>(
              <div style={{display: "flex"}}>
                <img src={car.img} alt="" width={100} height={100} />
                <h1>{car.name}</h1>
                <p>{car.cantidad}</p>
                <button onClick={()=>removeItem(car.id)}>Eliminar Productos</button>
              </div>
            ))
          )
        }
      </div>
      <div style={{display: "flex", gap: "20px"}}>
        {productos.map((prod) => (
          <div key={prod.id} style={{border: "1px solid black", padding: "10px"}}>
            <img src={prod.img} alt="" width={200} height={200} />
            <h2>{prod.name}</h2>
            <p>Precio: {prod.precio}</p>
            <p>Fecha Vencimiento: {prod.fechaVencimiento}</p>
            <button onClick={()=>addCart(prod)}>AGREGAR CARRITO</button>
          </div>
        ))}
      </div>
    </div>
  );
};
