import { createContext, useEffect, useState } from "react";
import { categorias as categoriasDB } from "../data/categorias";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
const QuiscoContext = createContext();
const QuiscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState(categoriasDB);
  const [categoriaActual, setCategoriaActual] = useState(categorias[0]);
  const [modal, setModal] = useState(false);
  const [producto, setProducto] = useState({});
  const [pedido, setPedido] = useState([]);
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const nuevoTotal = pedido.reduce((total,producto)=>{
      return total + (producto.cantidad * producto.precio)
    },0)
    setTotal(nuevoTotal)
  }, [pedido])

  const handleClickCategoria = (id) => {
    const nuevaCategoria = categorias.filter(
      (categoria) => categoria.id === id
    );
    setCategoriaActual(nuevaCategoria[0]);
  };
  const handleClickModal = () => {
    setModal(!modal);
  };
  const handleSetProducto = (producto) => {
    setProducto(producto);
  };
  const handleAgregarPedido = ({ categoria_id, ...producto }) => {
    if (pedido.some((productoState) => productoState.id === producto.id)) {
      const pedidoActualizado = pedido.map((productoState) =>
        productoState.id == producto.id
          ? producto: productoState
      )
      setPedido(pedidoActualizado)
      toast.success('Guardado correctamente');
    } else {
      setPedido([...pedido, producto]);
      toast.success('Producto Agregado al pedido');
    }
  }
  const handleEditarCantidad = (id) => {
    const productoActualizar=pedido.filter(producto => producto.id === id)[0]
    setProducto(productoActualizar)
    setModal(!modal)
  }
  const handleEliminarProductoPedido=(id)=>{
    const pedidoActualizado = pedido.filter(producto => producto.id !== id)
    setPedido(pedidoActualizado)
    toast.success('Eliminado correctamente')
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
        handleSetProducto,
        pedido,
        handleAgregarPedido,
        handleEditarCantidad,
        handleEliminarProductoPedido,
        total

      }}
    >
      {children}
    </QuiscoContext.Provider>
  );
};
export { QuiscoProvider };
export default QuiscoContext;
