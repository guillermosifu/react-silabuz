import{useState} from "react"


const Prueba2 =()=>{
 const[nombre,setNombre]=useState("guil")


 const cambiarNombre=(nuevo)=>{
    setNombre(nuevo)
 }



    return(
        <div>
            <h1>seguimos Probando</h1>
            <p>mi nombre es: <strong className={nombre.length <=4 ?'verde':'azul'}>{nombre}</strong></p>
            <p>mi apellido :</p>


            <input type="text" placeholder="cambia el nombre"  />

            <button onClick={e=>cambiarNombre("lucho")}>Cambiar nombre</button>
        </div>
    )
} 

export default Prueba2