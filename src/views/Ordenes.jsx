import useSWR from "swr";
import axiosClient from "../config/axios";
export const Ordenes = () => {
  const token = localStorage.getItem("AUTH_TOKEN");
  const fetcher = () => axiosClient('api/pedidos',{
    headers:{
      Authorization: `Bearer ${token}`
    }
  })
  const { data, error, isLoading } = useSWR('/api/pedidos', fetcher,{
    refreshInterval:1000
  })
  return (
    <div>
      <h1 className="text-4xl font-black">Ordenes</h1>
      <p className="text-2xl my-10">
        Administra las ordenes desde aqui
      </p>
    </div>
  );
};
