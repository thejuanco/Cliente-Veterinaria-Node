import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Alert from "../components/Alert";

const Register = () => {

  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [repetirPassword, setRepetirPassword] = useState("")
  const [alerta, setAlerta] = useState({});
  const [alertaDos, setAlertaDos] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();

    //Creando un arreglo con todos los elementos del formulario
    if([nombre, email, password, repetirPassword].includes('')){
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return;
    }

    if(password !== repetirPassword){
      setAlerta({
        msg: 'Las contraseñas no coinciden',
        error: true
      })
      return;
    }

    if(password.length < 6){
      setAlerta({
        msg: 'La contraseña debe de tener minimo 6 caracteres',
        error: true
      })
      return;
    }

    setAlerta({})
    
    //Crear el usuario en la API
    try {
      const url = "http://localhost:4000/api/veterinarios"
      await axios.post(url, {
        nombre,
        email,
        password
      })
      setAlerta({
        msg: 'Cuenta creada exitosamente, revisa tu correo',
        error: false
      })
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
  }

  const { msg } = alerta;

  return (
    <>
      <div className="ml-12">
        <h1 className="text-indigo-600 font-bold text-5xl">
          Crea tu cuenta y Administra{" "}
          <span className="text-black">tus Pacientes</span>
        </h1>
      </div>

      <div className="mr-12 md:mt-2 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alert 
          alerta={alerta}
        />}
        <form
          onSubmit={handleSubmit}
        >
          <div className="my-1">
            <label className="text-gray-600 block text-xl font-bold">
              Nombre
            </label>
            <input
              type="text"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-lg"
              placeholder="Tu nombre"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="text-gray-600 block text-xl font-bold">
              Correo Electronico
            </label>
            <input
              type="email"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-lg"
              placeholder="Correo de registro"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="text-gray-600 block text-xl font-bold">
              Contraseña
            </label>
            <input
              type="password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-lg"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="my-5">
            <label className="text-gray-600 block text-xl font-bold">
              Repetir tu Contraseña
            </label>
            <input
              type="password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-lg"
              placeholder="Repite tu contraseña"
              value={repetirPassword}
              onChange={e => setRepetirPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Registrate"
            className="bg-indigo-700 w-full py-3 rounded-lg text-white uppercase font-bold mt-3 hover:cursor-pointer hover:bg-indigo-800 md:w-auto px-10"
          />
        </form>

        <nav className="mt-6 lg:flex lg:justify-between">
          <Link
            className="block text-center my-3 text-gray-500"
            to="/"
          >
            {" "}
            ¿Ya tienes una cuenta?, Inicia Sesión
          </Link>
          <Link
            className="block text-center my-3 text-gray-500"
            to="/olvide-password"
          >
            {" "}
            Olvide mi contraseña
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Register;
