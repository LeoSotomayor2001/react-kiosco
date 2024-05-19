import { categorias } from "../data/categorias"


export const Categoria = ({ categoria }) => {
    const { icono, nombre,id } = categoria
  return (
    <div 
        className="flex items-center gap-4 border w-full p-3 hover:bg-sky-500 
        hover:border-sky-500 hover:text-white cursor-pointer"
    >
        <img src={`/img/icono_${icono}.svg`} alt="imagen icono" className="w-12" />
        <p className="text-2xl font-bold cursor-pointer truncate">{nombre}</p>
    </div>
  )
}
