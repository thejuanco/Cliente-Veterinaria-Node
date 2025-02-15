import { useState, useEffect, createContext } from 'react';

//Habilita el context API
const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({});

    //Retorna el context
    return (
        <AuthProvider.Provider>
            {children}
        </AuthProvider.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext;