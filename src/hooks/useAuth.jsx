import { useContext } from 'react'
import AuthContext, { AuthProvider } from '../context/AuthProvider'

const useAuth = () => {
    return useContext(AuthProvider)
}

export default useAuth;