import { useState, useEffect, createContext } from 'react';

//Habilita el context API
const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({});

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