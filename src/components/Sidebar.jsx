
import useQuiosco from "../hooks/useQuiosco"
import { Categoria } from "./Categoria"


export const Sidebar = () => {
    const {categorias}= useQuiosco()
  return (
    <aside className="md:w-72 ">
        <div className="p-4">
            <img 
                src="/img/logo.svg" 
                alt="imagen logo"
                className="w-40"
            />
        </div>

        <div className="mt-10">
            {categorias.map(categoria => (
                <Categoria 
                    categoria={categoria} 
                    key={categoria.id} 

                />
            ))}
        </div>
        <div className="my-5 px-5">
            <button
                className="bg-red-700 w-full p-3 text-white uppercase font-bold"
            >
                Cancelar Orden
            </button>
        </div>
    </aside>
  )
}
