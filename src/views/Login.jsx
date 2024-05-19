import { Link } from "react-router-dom"

export const Login = () => {
  return (
    <>
      <h1 className='text-3xl font-black'>Iniciar Sesión</h1>
      <p className='mt-1'>Para crear un pedido debes iniciar sesion</p>
      <div className="bg-white shadow-md rounded-lg mt-10 px-5 py-10">
          <form noValidate>

            <div className="mb-5">
              <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
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
              <label htmlFor="password" className="block text-gray-700 uppercase font-bold">
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
            <input 
              type="submit" 
              value="Iniciar Sesion"
              className="bg-sky-600 w-full p-3 rounded text-white uppercase font-bold cursor-pointer hover:bg-sky-700"  
            />
          </form>
      </div>
      <nav className="mt-5">
        <Link 
          to="/auth/register" 
          className="block text-center my-5 text-gray-500"
        >
          ¿No tienes cuenta? Registrate
        </Link>
      </nav>
    
    </>
  )
}
