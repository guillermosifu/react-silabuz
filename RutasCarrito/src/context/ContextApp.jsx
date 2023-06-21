import { createContext, useState } from "react";

export const ContextApp = createContext();

export const ContextProvider = ({ children }) => {
  const [nombreUsuario, setNombreUsuario] = useState("");

  const [cartItems, setCardItems] = useState([]);

  const addCart = (product) => {
    //SI EXISTE O NO EXISTE
    const existItem = cartItems.find((items) => items.id === product.id);
    if (existItem) {
      const updateItem = {
        ...existItem,
        cantidad: existItem.cantidad+1,
      };
      const updateCarrito = cartItems.map((items) =>
        items.id === existItem.id ? updateItem : items
      );
      setCardItems(updateCarrito);
    } else {
      const newItem = {
        ...product,
        cantidad: 1,
      };
      setCardItems([...cartItems, newItem]);
    }
  };

  const removeItem = (productId)  =>{
    const deleteItem = cartItems.filter((items) => items.id !== productId)
    setCardItems(deleteItem)
  }

  return (
    <ContextApp.Provider value={{ nombreUsuario, setNombreUsuario, addCart, cartItems, removeItem }}>
      {children}
    </ContextApp.Provider>
  );
};
