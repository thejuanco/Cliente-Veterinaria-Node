import React, { useState } from 'react'
import Alert from "../components/Alert"
import usePatients from '../hooks/usePatients';

const Formulario = () => {
    //States para los formularios
    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");
    const [sintomas, setSintomas] = useState("");
    //State para la alerta
    const [alert, setAlert] = useState({});

    const {savePatient} = usePatients();

    //Registrar los datos
    const handleSumbit = (e) => {
        e.preventDefault();
        
        //Validar el formulario
        if([nombre, propietario, email, fecha, sintomas].includes("")){
            setAlert({msg: "Todos los campos son obligatorios", error: true});
            return;
        }
        //Si pasa la validación regresa la alerta a su estado inicial
        setAlert({});
        savePatient({nombre, propietario, email, fecha, sintomas})

    }

    const {msg} = alert;

  return (
    <>
        <p className='text-lg text-center mb-10'>Añade tus pacientes y {""} <span className='font-bold text-indigo-600'>Administralos</span></p>
        {msg && <Alert alerta={alert}/>}
        <form onSubmit={handleSumbit} className='mx-5 bg-white py-10 px-5 mt-5 rounded-md mb-10 lg:mb-0 shadow'>
            <div className='mb-5'>
                <label 
                    htmlFor='nombre'
                    className='text-gray-700'    
                >Nombre Mascota</label>
                <input 
                    id="nombre"
                    type='text'
                    placeholder='nombre de la mascota'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label 
                    htmlFor='propietario'
                    className='text-gray-700'    
                >Nombre Propietario</label>
                <input 
                    id="propietario"
                    type='text'
                    placeholder='nombre del propietario'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={propietario}
                    onChange={e => setPropietario(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label 
                    htmlFor='email'
                    className='text-gray-700'    
                >Correo electronico</label>
                <input 
                    id="email"
                    type='email'
                    placeholder='correo del propietario'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label 
                    htmlFor='fecha'
                    className='text-gray-700'    
                >Fecha alta</label>
                <input 
                    id="fecha"
                    type='date'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={fecha}
                    onChange={e => setFecha(e.target.value)}
                />
            </div>
            <div className='mb-5'>
                <label 
                    htmlFor='sintomas'
                    className='text-gray-700'    
                >Sintomas</label>
                <textarea
                    id="sintomas"
                    placeholder='describe los sintomas de la mascota'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={sintomas}
                    onChange={e => setSintomas(e.target.value)}
                />
            </div>
            <input 
                type='submit'
                className='bg-indigo-600 w-full py-3 text-white font-bold hover:bg-indigo-800 cursor-pointer rounded-full'
                value="Agregar paciente"
            />
        </form>
    </>
  )
}

export default Formulario