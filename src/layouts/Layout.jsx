import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'
import { Resumen } from '../components/Resumen'
import useQuiosco from '../hooks/useQuiosco'
import { ToastContainer } from 'react-toastify'
import Modal from 'react-modal'
import { ModalProducto } from '../components/ModalProducto'
import { useAuth } from '../hooks/useAuth'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#root')
export const Layout = () => {
  const {error,user} = useAuth({middleware:'auth'})
  const {modal}= useQuiosco()
  return (
    <>
      <div className='md:flex'>
        <Sidebar/>
        <main className='flex-1 bg-gray-100 h-screen overflow-y-scroll p-3'>
          <Outlet/>

        </main>
        <Resumen/>
      </div>

      
      <Modal isOpen={modal} style={customStyles}>
        <ModalProducto/>
      </Modal>


      <ToastContainer/>
      
    </>

  )
}
