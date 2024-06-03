import { Link } from "react-router-dom";
import { useState,createRef } from "react";
import axiosClient from "../config/axios";
import Alerta from "../components/Alerta";
export const Login = () => {
  const emailRef = createRef();
  const passwordRef = createRef();
  const [error, setError] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datos= {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    try {
        const {data}= await axiosClient.post('/api/login',datos)
        console.log(data.token)
    } catch (error) {
        setError(Object.values(error.response.data.errors))
    }
  };
  return (
    <>
      <h1 className='text-3xl font-black'>Iniciar Sesión</h1>
      <p className='mt-1'>Para crear un pedido debes iniciar sesion</p>
      <div className="bg-white shadow-md rounded-lg mt-10 px-5 py-10">
          <form noValidate onSubmit={handleSubmit}>
          {error ? error.map((error,i) => <Alerta key={i}>{error}</Alerta>) : null}
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
                ref={emailRef}
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
                ref={passwordRef}
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
