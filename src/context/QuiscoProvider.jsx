import { createContext,useState } from "react"
import { categorias as categoriasDB } from "../data/categorias"
const QuiscoContext = createContext()
const QuiscoProvider= ({children}) => {

    const [categorias, setCategorias] = useState(categoriasDB)
    const [categoriaActual, setCategoriaActual] = useState(categorias[0])

    const handleClickCategoria = id => {
        const nuevaCategoria = categorias.filter(categoria => categoria.id === id)
        setCategoriaActual(nuevaCategoria[0])
    }
    return (
        <QuiscoContext.Provider 
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria
            }}
        >
            {children}
        </QuiscoContext.Provider>
    )
}
export {
    QuiscoProvider
} 
export default QuiscoContext