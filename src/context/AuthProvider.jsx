import { useState, useEffect, createContext } from 'react';
import clientAxios from '../config/Axios';

//Habilita el context API
const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const authUsuario = async () => {
            const token = localStorage.getItem("token");
            if(!token){
                setLoading(false);
                return;
            }

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
                setAuth({})
            }
            setLoading(false);
        }
        authUsuario();
    }, [])

    //Cierra la sesión del usuario
    const closeSession = () => {
        localStorage.removeItem("token");
        setAuth({})
    }

    const updateProfile = async (datos) => {
        const token = localStorage.getItem("token");
        if (!token) {
          setLoading(false);
          return;
        }

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        try {
            const url = `/veterinarios/perfil/${datos._id}`;
            const {data} = await clientAxios.put(url, datos, config);
            return {
                msg: "Almacenado correctamente"
            }
        } catch (error) {
            return({msg: error.response.data.msg, error: true});
        }
    }

    const savePassword = async (datos) => {
        const token = localStorage.getItem("token");
        if (!token) {
          setLoading(false);
          return;
        }

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        try {
          const url = `/veterinarios/cambiar-contra`;
          const { data } = await clientAxios.put(url, datos, config);
          console.log(data);

          return {
            msg: data.msg,
          };
        } catch (error) {
          return {
            msg: error.response.data.msg,
            error: true,
          };
        }
    }

    //Retorna el context
    return (
        <AuthContext.Provider
            value={{auth, setAuth, loading, closeSession, updateProfile, savePassword}}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext;