import { useState } from "react"

export const useMyHook = (initialState=false) => {
  
    const [active, setActive] = useState(initialState)
  
    const handleToggle = () => {
      setActive(!active)
    }
  
    const handleTrue = () => {
      setActive(true)
    }
  
    const handleFalse = () => {
      setActive(false)
    }
    
    return {
      active,
      handleToggle,
      handleTrue,
      handleFalse
    }
  }