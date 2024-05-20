
import useQuiosco from "../hooks/useQuiosco"


export const Categoria = ({ categoria }) => {
    const { icono, nombre,id } = categoria
    const { handleClickCategoria, categoriaActual } = useQuiosco()
    const resaltar=()=>{
        return categoriaActual?.id===id ? 'bg-sky-500 text-white' : 'bg-white'
    }
  return (
    <button onClick={() => handleClickCategoria(id)}
        className={`${resaltar()} 
        flex items-center gap-4 border w-full p-3 hover:bg-sky-500 
        hover:border-sky-500 hover:text-white cursor-pointer`}
    >
        <img src={`/img/icono_${icono}.svg`} alt="imagen icono" className="w-12" />
        <p 
          className="text-2xl font-bold cursor-pointer truncate"
        >
          {nombre}
        </p>
    </button>
  )
}
