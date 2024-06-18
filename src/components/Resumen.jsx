import { formatearDinero } from '../helpers'
import useQuiosco from '../hooks/useQuiosco'
import { ResumenProducto } from './ResumenProducto'
export const Resumen = () => {
  const { pedido, total,handleSubmitNuevaOrden } = useQuiosco()
  const comprobarPedido = () => {
    return pedido.length === 0
  }
  const handleSubmit = (e) => {
      e.preventDefault();

      handleSubmitNuevaOrden();

  }
  return (
    <aside className="md:w-72 h-screen overflow-x-scroll p-5">
      <h2 className="text-4xl font-bold">Mi pedido</h2>
      <p className="my-5 text-lg">
        Podras ver el resumen y totales de tu pedido
      </p>
      <div className='py-10'>
        {pedido.length === 0 ? (
          <p className="text-center text-2xl">
            No hay elementos en tu pedido
          </p>
        ):
          pedido.map(producto => (
            <ResumenProducto 
              key={producto.id}
              producto={producto}
            />
          ))
        }
      </div>
      <p className='text-xl mt-10'>
        Total:{''}
        {formatearDinero(total)}
      </p>
      <form className='w-full' onSubmit={handleSubmit}>
          <div className='mt-5'>
            <input
              type="submit"
              className={`${comprobarPedido() ? 'bg-indigo-100 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-800'} 
              w-full px-5 py-2 text-white 
              uppercase font-bold cursor-pointer `}
              value='Confirmar pedido'
              disabled={comprobarPedido()}
            />
          </div>
        </form>
    </aside>
  )
}
