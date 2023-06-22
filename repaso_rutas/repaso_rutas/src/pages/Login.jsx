import { useContext, useState } from "react"
import { ContextProvider } from "../context/ContextApp"
import Navbar from "../componets/Navbar"

const Login = () => {
  const {dataLocal, setDataUsuario} = useContext(ContextProvider)
  const [dataLogin, setDataLogin] = useState({})

  const handleChange = (event) => {
    setDataLogin({
      ...dataLogin,
      [event.target.name]: event.target.value
    })
  }

  const logearUsuario = (event) => {
    event.preventDefault()

    const buscarUsuario = dataLocal.find((usuario) => usuario.email == dataLogin.email && usuario.password == dataLogin.password)

    if (buscarUsuario) {
      setDataUsuario(buscarUsuario)
    }
  }

  return (
    <div>
        <h1>Bienvenido de vuelta!</h1>
        <form onSubmit={logearUsuario} className="flex gap-4 items-end">
            <label className="flex flex-col">
                <span>Correo</span>
                <input onChange={handleChange} value={dataLogin.email} name="email" type="email" className="border-2 rounded-sm"/>
            </label>
            <label className="flex flex-col">
                <span>Contraseña</span>
                <input onChange={handleChange} value={dataLogin.password} name="password" type="password" className="border-2 rounded-sm"/>
            </label>
            <button className="bg-gray-200 rounded-sm w-max h-max px-2">
                Iniciar Sesión
            </button>
        </form>
    </div>
  )
}

export default Login
