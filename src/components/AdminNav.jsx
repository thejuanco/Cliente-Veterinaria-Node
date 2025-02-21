import React from 'react'
import { Link } from 'react-router-dom'

const AdminNav = () => {
  return (
    <nav className="flex gap-3 mx-4">
        <Link to="/admin/perfil" className="font-bold text-gray-500">Perfil</Link>
        <Link to="/admin/cambiar-contra" className="font-bold text-gray-500">Cambiar contraseña</Link>
    </nav>
  )
}

export default AdminNav