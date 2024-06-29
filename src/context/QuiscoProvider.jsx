import { createContext, useEffect, useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import axiosClient from "../config/axios";

const QuiscoContext = createContext();
const QuiscoProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
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

  const obtenerCategorias=async()=>{
    const token =localStorage.getItem('AUTH_TOKEN');
    try {
        const {data}=await axiosClient('/api/categorias',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        setCategorias(data.data)
        setCategoriaActual(data.data[0])
    } catch (error) {
        console.log(error);
    }
}
  useEffect(() => {
    obtenerCategorias()
  },[])
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
  const handleSubmitNuevaOrden=async(e)=>{
    const token = localStorage.getItem('AUTH_TOKEN');
    try {
      const {data}=await axiosClient.post('/api/pedidos', {
        total,
        productos:pedido.map((producto)=>({id:producto.id,cantidad:producto.cantidad}))
      },{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      toast.success(data.message)
      setTimeout(()=>{
        setModal(false)
        setPedido([])
        setTotal(0)
      },1000)
    } catch (error) {
      console.log(error);
    }
  }
  const handleClickCompletarPedido=async id => {
      const token= localStorage.getItem('AUTH_TOKEN');
      try {
        await axiosClient.put(`/api/pedidos/${id}`,null, {
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
      } catch (error) {
        console.log(error);
      }
  }
  const handleClickProductoAgotado= async(id)=>{
      const token= localStorage.getItem('AUTH_TOKEN');
      try {
        await axiosClient.put(`/api/productos/${id}`,null, {
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
      } catch (error) {
        console.log(error);
      }
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
        total,
        handleSubmitNuevaOrden,
        handleClickCompletarPedido,
        handleClickProductoAgotado

      }}
    >
      {children}
    </QuiscoContext.Provider>
  );
};
export { QuiscoProvider };
export default QuiscoContext;
