import { createContext,useState } from "react"
import { categorias as categoriasDB } from "../data/categorias"
const QuiscoContext = createContext()
const QuiscoProvider= ({children}) => {

    const [categorias, setCategorias] = useState(categoriasDB)
    const [categoriaActual, setCategoriaActual] = useState(categorias[0])
    const [modal, setModal] = useState(false)
    const [producto, setProducto] = useState({})

    const handleClickCategoria = id => {
        const nuevaCategoria = categorias.filter(categoria => categoria.id === id)
        setCategoriaActual(nuevaCategoria[0])
    }
    const handleClickModal = () => {
        setModal(!modal)
    }
    const handleSetProducto = (producto) => {
        setProducto(producto)
    }
    return (
        <QuiscoContext.Provider 
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto
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