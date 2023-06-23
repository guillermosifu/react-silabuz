import { useContext } from "react"
import { ContextProvider } from "../context/ContextApp"

const Home = () => {
  const {hola, variable} = useContext(ContextProvider)
  console.log(hola)
  console.log(variable)
  return (
    <div>
      Home
    </div>
  )
}

export default Home
