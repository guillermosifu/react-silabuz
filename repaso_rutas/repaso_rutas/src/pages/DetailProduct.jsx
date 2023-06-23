import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DetailProduct = () => {
    const {idProducto} = useParams()
    const navigate = useNavigate()
    const [dataProducto, setDataProducto] = useState({})
    console.log(dataProducto)

    const fetchData = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/${idProducto}`)
        const data = await response.json()

        setDataProducto(data)
    }    

    useEffect(() => {
        fetchData()
    }, [])

    const backHome = () => {
        navigate(-1)
    }

  return (
    <div className='max-w-[1200px] mx-auto max-h-screen h-full flex flex-col justify-center items-center'>
      <h1>Detalle del Producto</h1>
        <div className='w-[960px] flex justify-start items-start'>
            <button className='px-3 py-2 border rounded-lg hover:bg-gray-200 transition-all duration-150' onClick={backHome}>
                Regresar al inicio
            </button>
        </div>
      <article className='grid grid-cols-2 justify-center max-w-[960px] max-h-[30rem]'>
            <section className='w-full max-h-[30rem]'>
                <img src={dataProducto?.image} alt="" className='w-full h-full object-contain' />
            </section>
            <section className='flex flex-col justify-center '>
                <h1 className='mb-24 text-2xl font-semibold'>{dataProducto.title}</h1>
                <p className='italic'>{dataProducto.description}</p>
                <div className='flex gap-2 items-center mt-4'>
                    <h3>Precio: {dataProducto.price}</h3>
                    <button className='border rounded-md bg-gray-200 hover:bg-gray-300 transition-all duration-150 py-1 px-2 w-max'>
                        Agregar al carrito
                    </button>
                </div>
            </section>
      </article>
    </div>
  )
}

export default DetailProduct
