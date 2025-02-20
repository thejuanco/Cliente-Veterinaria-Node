import React, {useState} from 'react'
import usePatients from '../hooks/usePatients'

const Paciente = ({paciente}) => {
    const {editPatient} = usePatients();
    const [ pacientes, setPacientes ] = useState({})

    const {email, fecha, nombre, propietario, sintomas, _id} = paciente

    function formatearFecha(fecha){
        const nuevaFecha = new Date(fecha)

        return new Intl.DateTimeFormat("es-MX", {dateStyle: 'long'}).format(nuevaFecha)
    }

  return (
    <div className="mx-5 my-10 bg-white shadow-md py-10 px-5 rounded-xl">
      <p className="font-bold uppercase text-indigo-800 my-2">
        Nombre: {""}
        <span className="font-normal normal-case text-black">{nombre}</span>
      </p>
      <p className="font-bold uppercase text-indigo-800 my-2">
        Propietario: {""}
        <span className="font-normal normal-case text-black">
          {propietario}
        </span>
      </p>
      <p className="font-bold uppercase text-indigo-800 my-2">
        Correo electronico: {""}
        <span className="font-normal normal-case text-black">{email}</span>
      </p>
      <p className="font-bold uppercase text-indigo-800 my-2">
        Fecha de alta: {""}
        <span className="font-normal normal-case text-black">
          {formatearFecha(fecha)}
        </span>
      </p>
      <p className="font-bold uppercase text-indigo-800 my-2">
        Sintomas: {""}
        <span className="font-normal normal-case text-black">{sintomas}</span>
      </p>

      <div className="flex justify-between my-8">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
          onClick={() => editPatient(paciente)}
        >
          Editar
        </button>

        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Paciente