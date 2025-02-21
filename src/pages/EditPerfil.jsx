import React from 'react'
import AdminNav from '../components/AdminNav'

const EditPerfil = () => {
  return (
    <>
        <AdminNav/>
        <h2 className="font-black text-center text-3xl mt-10">
        Editar Perfil
      </h2>
      <p className="text-xl mt-5 mb-10 text-center ">
        Modifica tu {""}
        <span className="text-indigo-600 font-bold">información</span>
      </p>
    </>
  )
}

export default EditPerfil