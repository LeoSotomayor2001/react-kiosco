import { useEffect } from "react";
import axiosClient from "../config/axios";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";

export const useAuth = ({ middleware, url }) => {
    const token = localStorage.getItem('AUTH_TOKEN');
    const navigate = useNavigate();
    const fetcher = async (url) => {
        try {
            const response = await axiosClient(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            throw new Error(error?.response?.data?.errors || 'Error fetching data');
        }
    };

    const { data: user, error, mutate } = useSWR('/api/user', fetcher);

    const login = async (datos, setErrores) => {
        try {
            const { data } = await axiosClient.post('/api/login', datos);
            localStorage.setItem('AUTH_TOKEN', data.token);
            setErrores([]);
            await mutate();
        } catch (error) {
            setErrores(error?.response?.data?.errors ? Object.values(error.response.data.errors) : ['Error logging in']);
        }
    };

    const registro = async (datos, setError) => {
        try {
            const {data}= await axiosClient.post('/api/registro',datos)
            localStorage.setItem('AUTH_TOKEN', data.token);
            setError([]);
            await mutate();
        } catch (error) {
            setError(Object.values(error.response.data.errors))
        }
    };

    const logout = async () => {
       try {
            await axiosClient.post('/api/logout',{},{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            localStorage.removeItem('AUTH_TOKEN');
            await mutate(undefined);
       } catch (error) {
            throw new Error(error?.response?.data?.errors || 'Error fetching data');
       }
    };
    
    useEffect(() => {
        if(middleware === 'guest' && url && user) {
            navigate(url)
            
        }
        if(middleware==='guest' && user && user.admin){
            navigate('/admin')
        }
        if(middleware === 'admin' && user && !user.admin){
            navigate('/')
        }

        if(middleware === 'auth' && error) {
            navigate('/auth/login')
        }


    },[user,error])

    return { login, registro, logout, user, error };
};
