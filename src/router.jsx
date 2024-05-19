import {createBrowserRouter} from 'react-router-dom'
import { Layout } from './layouts/Layout'
import { AuthLayout } from './layouts/AuthLayout'
import { Inicio } from './views/Inicio'
import { Login } from './views/Login'
import { Registro } from './views/Registro'
const router=createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children: [
            {
                index: true,//cuando visite la pagina carga este componente
                element: <Inicio/>
            }
        ]
    },
    {
        path:'/auth',
        element: <AuthLayout/>,
        children: [
            {
                path: '/auth/login',
                element: <Login/>
            },
            {
                path: '/auth/register',
                element: <Registro/>
            }
        ]
    }
])

export default router