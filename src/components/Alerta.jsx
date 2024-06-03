
export default function Alerta({children}) {
  return (
    <div className="bg-red-700 text-white text-center p-3 uppercase font-bold my-2 rounded-md">
      {children}
    </div>
  )
}
