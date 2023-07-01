import { createContext, useState } from "react";

export const UserContext = createContext();
//siempre necesiatra un PROVIDER , SIN ESO ONO FUNCIONA

export const UserProvider = () => {
  const [user, setUser] = useState({
    name: "guillermo",
    last_name: "sifuentes",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
