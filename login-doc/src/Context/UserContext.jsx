import { createContext, useState } from "react";

export const UserContext = createContext();
//siempre necesiatra un PROVIDER , SIN ESO ONO FUNCIONA

export const UserProvider = (props) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

 const storeUSer =(dataUser)=>{
  localStorage.setItem("user" , JSON.stringify(dataUser))
  setUser(dataUser)
 }


  return (
    <UserContext.Provider value={{ user, storeUSer }}>
      {props.children}
    </UserContext.Provider>
  );
};
