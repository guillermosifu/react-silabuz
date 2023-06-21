import { Link, useNavigate } from "react-router-dom"

export const Navbar = () =>{
    const navigate = useNavigate()
    const cerrarSesion = () =>{
        navigate("/", {replace: true})
    }
    return(
        <nav style={{display: "flex",gap: "10px",  boxShadow: 200}}>
            <p>Inicio</p>
            <Link to="/dashboard/configuracion" state={{logged: true}}>Configuracion</Link>
            <p>Ajustes</p>
            <p>Cursos</p>
            <button onClick={cerrarSesion}>Salir</button>
        </nav>
    )
}