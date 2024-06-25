import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const AdminSidebar = () => {
    const { logout } = useAuth({ middleware: "auth" });
  return (
    <aside className="md:w-72 h-screen ">
      <div className="p-4 ">
        <img src="/img/logo.svg" alt="imagen logo" className="w-40" />
        <nav className="flex flex-col p-4">
          <Link to="/admin" className="text-lg font-bold">
            Ordenes
          </Link>
          <Link to="/admin/productos" className="text-lg font-bold">
            Productos
          </Link>
        </nav>
      </div>
      <div className="my-5 px-5">
        <button
          className="bg-red-700 w-full p-3 text-white uppercase font-bold"
          onClick={logout}
        >
          Cerrar Sesión
        </button>
      </div>
    </aside>
  );
};
