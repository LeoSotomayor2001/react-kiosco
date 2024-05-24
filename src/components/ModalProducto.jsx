import React, { useEffect, useState } from "react";
import useQuiosco from "../hooks/useQuiosco";
import { formatearDinero } from "../helpers";

export const ModalProducto = () => {
  const { producto, handleClickModal, handleAgregarPedido,pedido } = useQuiosco()
  const [edicion, setEdicion] = useState(false)
  const [cantidad, setCantidad] = useState(1);
  useEffect(() => {
    if(pedido.some(productoState => productoState.id === producto.id)){
        const pedidoEdicion=pedido.filter(productoState => productoState.id == producto.id)[0]
        setCantidad(pedidoEdicion.cantidad)
        setEdicion(true)
    }
    
  },[pedido])
  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <img
          src={`/img/${producto?.imagen}.jpg`}
          alt={`imagen ${producto?.nombre}`}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleClickModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5">{producto?.nombre}</h1>
        <p className="mt-5 text-green-500 text-5xl font-black">
          {formatearDinero(producto?.precio)}
        </p>
        <div className="flex gap-4 mt-5">
          <button
            type="button"
            onClick={() => {
              if (cantidad > 1) {
                setCantidad(cantidad - 1);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
          <p className="text-3xl font-bold">{cantidad}</p>
          <button
            type="button"
            onClick={() => {
              if (cantidad < 5) {
                setCantidad(cantidad + 1);
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
        <button 
            className="bg-sky-600 hover:bg-sky-800 text-white mt-5 p-3 uppercase font-bold"
            onClick={() => {
                handleAgregarPedido({...producto, cantidad})
                handleClickModal()
            }}
        >
          {edicion ? 'Guardar Cambios' : 'Añadir al pedido'}
        </button>
      </div>
    </div>
  );
};
