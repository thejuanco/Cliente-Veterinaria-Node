import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Alert from '../components/Alert'
import clientAxios from '../config/Axios'

const ForgotPassword = () => {

  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(email === "" || email.length < 6){
      setAlert({msg: "El correo es obligatorio", error: true})
      return
    }

    try {
      const {data} = await clientAxios.post("/veterinarios/olvide-password", {email});
      setAlert({msg: data.msg, error: false})
    } catch (error) {
      setAlert({msg: error.response.data.msg, error: true})
    }
  }
  const {msg} = alert;

  return (
    <>
      <div className="ml-12">
            <h1 className="text-indigo-600 font-bold text-5xl">Recupera tu acceso y no pierdas <span className="text-black">tus Pacientes</span></h1>
        </div>

        <div className="mr-12 mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
          {msg && <Alert
            alerta={alert}
          />}
            <form onSubmit={handleSubmit}>
                <div className="my-5">
                    <label className="text-gray-600 block text-xl font-bold">Correo Electronico</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="border w-full p-3 mt-3 bg-gray-50 rounded-lg" placeholder="Correo de registro"/>
                </div>
                <input type="submit" value="Recuperar tu contraseña" className="bg-indigo-700 w-full py-3 rounded-lg text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto px-10"/>
            </form>

            <nav className="mt-10 lg:flex lg:justify-between">
                <Link className="block text-center my-5 text-gray-500" to="/registrar"> No tienes una cuenta?, Registrate</Link>
                <Link className="block text-center my-5 text-gray-500" to="/registrar"> Inicia Sesión</Link>
            </nav>
        </div>
    </>
  )
}

export default ForgotPassword