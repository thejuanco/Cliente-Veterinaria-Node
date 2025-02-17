import React from 'react'

const Formulario = () => {
  return (
    <>
        <p className='text-lg text-center mb-10'>Añade tus pacientes y {""} <span className='font-bold text-indigo-600'>Administralos</span></p>
        <form className='mx-5 bg-white py-10 px-5 rounded-md mb-10 lg:mb-0 shadow'>
            <div className='mb-5'>
                <label 
                    htmlFor='mascota'
                    className='text-gray-700'    
                >Nombre Mascota</label>
                <input 
                    id="mascota"
                    type='text'
                    placeholder='nombre de la mascota'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
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