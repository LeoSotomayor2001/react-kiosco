import axiosClient from "../config/axios"
import useSWR from "swr"
export const useAuth= ({middleware,url}) =>{

    const token=localStorage.getItem('AUTH_TOKEN');
    
    const { data: user, error,mutate } = useSWR('/api/user', () =>
        axiosClient('/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => {
            throw Error(error?.response?.data?.errors)
        })
    )

    const login=async(datos,setErrores)=>{
        try {
            const {data}=await axiosClient.post('/api/login',datos);
            localStorage.setItem('AUTH_TOKEN',data.token)
            setErrores([])
            await mutate()
        } catch (error) {
              setErrores(Object.values( error.response.data.errors));
        }
    }
    const registro= ()=> {}
    const logout= ()=> {}

    console.log(user)
    console.log(error)
    return {login,registro,logout}
}