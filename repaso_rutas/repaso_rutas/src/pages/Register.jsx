import { useContext, useState } from "react"
import { ContextProvider } from "../context/ContextApp"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const {dataLocal} = useContext(ContextProvider)
    const [formData, setFormData] = useState({})    
    const navigate = useNavigate()

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    } 

    const registrarUsuario = (event) => {
        event.preventDefault()

        const dataEnviada = JSON.stringify([...dataLocal, formData])
        
        localStorage.setItem('bdUsuarios', dataEnviada)
        navigate('/login')
    }
    
  return (
    <div>
        <h1>Bienvenido a mi página web</h1>
        <form onSubmit={registrarUsuario} className="flex gap-4 items-end">
            <label className="flex flex-col">
                <span>Correo</span>
                <input onChange={handleChange} value={formData.email} name="email" type="email" className="border-2 rounded-sm"/>
            </label>
            <label className="flex flex-col">
                <span>Contraseña</span>
                <input onChange={handleChange} value={formData.password} name="password" type="password" className="border-2 rounded-sm"/>
            </label>
            <button className="bg-gray-200 rounded-sm w-max h-max px-2">
                Registrar
            </button>
        </form>
    </div>
  )
}

export default Register
