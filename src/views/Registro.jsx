import { Link } from "react-router-dom";

export const Registro = () => {
  return (
    <>
      <h1 className="text-3xl font-black">Crea tu cuenta</h1>
      <p className="mt-1">Ingresa los datos para crear tu cuenta</p>
      <div className="bg-white shadow-md rounded-lg mt-10 px-5 py-10">
        <form noValidate>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-gray-700 uppercase font-bold"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border border-gray-200 mt-2 bg-gray-200"
              placeholder="Nombre"
              name="name"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-700 uppercase font-bold"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-200 mt-2 bg-gray-200"
              placeholder="Tu email"
              name="email"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-gray-700 uppercase font-bold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-200 mt-2 bg-gray-200"
              placeholder="Tu Password"
              name="password"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="password_confirmation"
              className="block text-gray-700 uppercase font-bold"
            >
              Confirmar Password
            </label>
            <input
              type="password"
              id="password_confirmation"
              className="w-full p-3 border border-gray-200 mt-2 bg-gray-200"
              placeholder="Repite tu Password"
              name="password_confirmation"
            />
          </div>
          <input
            type="submit"
            value="Crear Cuenta"
            className="bg-sky-600 w-full p-3 rounded text-white uppercase font-bold cursor-pointer hover:bg-sky-700"
          />
        </form>
      </div>
      <nav className="mt-5">
        <Link to="/auth/login" className="block text-center my-5 text-gray-500">
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>
      </nav>
    </>
  );
};
