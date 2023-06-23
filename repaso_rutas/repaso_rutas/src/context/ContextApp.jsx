import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const ContextProvider = createContext() 

const ContextApp = ({children}) => {
    const navigate = useNavigate()
    const [dataUsuario, setDataUsuario] = useState({})
    const bdUsuarios = localStorage.getItem('bdUsuarios')

    const dataLocal = bdUsuarios ? JSON.parse(bdUsuarios) : [] 

    console.log(dataUsuario)
    console.log(Object.values(dataUsuario))

    useEffect(() => {
      if (Object.values(dataUsuario).length > 0) {
        navigate('/dashboard', {state: {logged: true}, replace: true})
      }
    }, [dataUsuario])

  return (
    <ContextProvider.Provider value={{dataLocal, setDataUsuario}}>
      {children}
    </ContextProvider.Provider>
  )
}

export default ContextApp
