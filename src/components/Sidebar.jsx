
import useQuiosco from "../hooks/useQuiosco"
import { Categoria } from "./Categoria"
import { useAuth } from "../hooks/useAuth"

export const Sidebar = () => {
    const {categorias}= useQuiosco()
    const {logout,user} = useAuth({middleware:'auth'})
  return (
    <aside className="md:w-72 ">
        <div className="p-4">
            <img 
                src="/img/logo.svg" 
                alt="imagen logo"
                className="w-40"
            />
        </div>
        <p className="my-5 text-center text-xl">Hola: {user?.name}</p>
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
                onClick={logout}
            >
                Cancelar Orden
            </button>
        </div>
    </aside>
  )
}
