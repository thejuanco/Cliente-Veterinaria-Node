import React from 'react'
import usePatients from '../hooks/usePatients'

const ListadoPacientes = () => {
  const {pacientes} = usePatients();
  

  return (
    <>
      {pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">Administra tus pacientes {''}<span className="text-indigo-600 font-bold">y citas</span></p>
        
        </>
      ): (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">Comienza a agregar pacientes {''}<span className="text-indigo-600 font-bold">y apareceran aquí</span></p>
        </>
      )}
    </>
  )
}

export default ListadoPacientes