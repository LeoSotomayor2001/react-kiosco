import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { Resumen } from '../components/Resumen'

export const Layout = () => {
  return (
    <div className='md:flex'>
      <Sidebar/>
      <main className='flex-1 bg-gray-100 h-screen overflow-y-scroll p-3'>
        <Outlet/>

      </main>
      <Resumen/>
    </div>

  )
}
