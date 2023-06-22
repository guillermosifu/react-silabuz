import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const ContextProvider = createContext() 

const ContextApp = ({children}) => {
    const navigate = useNavigate()
    const [dataUsuario, setDataUsuario] = useState({})
    const bdUsuarios = localStorage.getItem('bdUsuarios')

    const dataLocal = bdUsuarios ? JSON.parse(bdUsuarios) : [] 

    useEffect(() => {
        console.log("validado!")
    }, [dataUsuario])

  return (
    <ContextProvider.Provider value={{dataLocal, setDataUsuario}}>
      {children}
    </ContextProvider.Provider>
  )
}

export default ContextApp
