import useSWR from "swr"
import axiosClient from "../config/axios"
import { Producto } from "../components/Producto";

export const Productos = () => {

  const token=localStorage.getItem('AUTH_TOKEN');
  const fetcher=()=> axiosClient('/api/productos', {
    headers:{
      Authorization: `Bearer ${token}`
    }
  }).then(data=>data.data)
  const {data, error, isLoading}=useSWR('/api/productos', fetcher, {
    refreshInterval:1000
  })

  if(isLoading){
    return (
      <div>
        Cargando...
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-4xl font-black">Productos</h1>
      <p className="text-2xl my-10">
        Maneja la disponibilidad desde aqui
      </p>
      
      <div className='grid gap-4 grid-cols-1 xl:grid-cols-3'>
          {data.data.map(producto =>(
              <Producto
                key={producto.imagen}
                producto={producto}
                botonDisponible={true}
              />
          ))}
      </div>
    </div>
  )
}
