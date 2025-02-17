import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProtectedRoute = () => {

    const { auth, loading } = useAuth();
    console.log(auth)
    console.log(loading)

    if(loading) return "Cargando...";
    
  return (
    <>
        <div>
            <h1>Esta es una ruta protegida</h1>
        </div>
        {auth?._id ? <Outlet/> : <Navigate to="/" />}
    </>
  )
}

export default ProtectedRoute