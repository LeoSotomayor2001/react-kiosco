import { Producto } from '../components/Producto'
import {productos} from '../data/productos'
export const Inicio = () => {
  console.log(productos)
  return (
    <>
      <h1 className='text-3xl font-black'>Inicio</h1>
      <p className='text-2xl my-10'>Elije y personaliza tu pedido</p>

      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        {
          productos.map(producto => (
            <Producto
              key={producto.imagen}
              producto={producto}
            />
          ))
        }
      </div>
    </>
  )
}
