import { createContext } from 'react'

export const ContextProvider = createContext() 

const ContextApp = ({children}) => {

  return (
    <ContextProvider.Provider value={{}}>
      {children}
    </ContextProvider.Provider>
  )
}

export default ContextApp
