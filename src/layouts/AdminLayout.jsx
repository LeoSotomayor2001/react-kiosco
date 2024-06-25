import { Outlet } from "react-router-dom"
import { AdminSidebar } from "../components/AdminSidebar"
import { useAuth } from "../hooks/useAuth"
export const AdminLayout = () => {
  useAuth({middleware:'admin'})
  return (
    <div className='md:flex'>
    <AdminSidebar/>
    <main className='flex-1 bg-gray-100 h-screen overflow-y-scroll p-3'>
      <Outlet/>

    </main>
  </div>

  )
}
