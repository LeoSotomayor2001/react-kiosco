import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

export const Producto = ({
  producto,
  botonAgregar = false,
  botonDisponible = false,
}) => {
  const { nombre, imagen, precio } = producto;
  const { handleClickModal, handleSetProducto,handleClickProductoAgotado } = useQuiosco();
  return (
    <div className="border p-4 shadow bg-white">
      <img
        src={`/img/${imagen}.jpg`}
        alt={`imagen ${producto.nombre}`}
        className="w-full"
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-green-500">
          {formatearDinero(precio)}
        </p>
        {botonAgregar && (
          <button
            type="button"
            onClick={() => {
              handleClickModal();
              handleSetProducto(producto);
            }}
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
          >
            Agregar
          </button>
        )}

        {botonDisponible && (
          <button
            type="button"
            onClick={() => handleClickProductoAgotado(producto.id)}
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
          >
            Producto Agotado
          </button>
        )}
      </div>
    </div>
  );
};
