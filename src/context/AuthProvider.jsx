import { useState, useEffect, createContext } from 'react';
import clientAxios from '../config/Axios';

//Habilita el context API
const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({});

    useEffect(() => {
        const authUsuario = async () => {
            const token = localStorage.getItem("token");
            if(!token) return;

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            try {
                const {data} = await clientAxios("/veterinarios/perfil", config);
                setAuth(data);
            } catch (error) {
                console.log(error.response.data);
            }

        }
        authUsuario();
    }, [])

    //Retorna el context
    return (
        <AuthContext.Provider
            value={{auth, setAuth}}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext;