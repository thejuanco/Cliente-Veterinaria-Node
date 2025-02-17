import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

import Header from '../components/Header';
import Footer from '../components/Footer';

const ProtectedRoute = () => {

    const { auth, loading } = useAuth();

    if(loading) return "Cargando...";
    
  return (
    <>
        <Header/>
            <main className='container mx-auto mt-10'>
                {auth?._id ? <Outlet/> : <Navigate to="/" />}
            </main>
        <Footer/>
    </>
  )
}

export default ProtectedRoute