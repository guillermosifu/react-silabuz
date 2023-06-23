import { useEffect, useState } from "react"

const Products = () => {

  const [dataProductos, setDataProductos] = useState([])

  const fetchProducts = async () => {
    const response = await fetch(`https://fakestoreapi.com/products?limit=${10}`)
    const data = await response.json()

    setDataProductos(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  console.log(dataProductos)

  return (
    <div>

      <form action="">
        <input type="text" placeholder="Busqueda de productos..." className="border-2 py-2 px-3 w-64" />
      </form>
      
      <article className="flex flex-wrap justify-center gap-4 py-4">
        {dataProductos && dataProductos.length > 0 && dataProductos.map((producto) => (
          <div key={producto.id} className="grid grid-cols-1 grid-rows-2 border-2 rounded-lg w-64 max-w-[16rem] h-[20rem]">
            <section className="w-full h-full">
              <img src={producto.image} alt="imagen" className="w-full h-full object-contain" />
            </section>
            <section className="mt-2 p-1">
              <h1 className="text-lg font-bold line-clamp-2">{producto.title}</h1>
              <p className="line-clamp-3">{producto.description}</p>
            </section>  
          </div>
        ))}

      </article>
    </div>
  )
}

export default Products
