import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Alert from "../components/Alert";
import clientAxios from "../config/Axios";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();

        //Valida que todos los campos estén llenos
        if([email, password].includes("")){
            setAlert({msg: "Todos los campos son obligatorios", error: true});
            return;
        }
        
        try {
            //Envia la petición para autenticar al usuario
            const { data } = await clientAxios.post('/veterinarios/login', {email, password})
            //Si la petición es exitosa, guarda el token en el local storage
            localStorage.setItem("token", data.token)
        } catch (error) {
            setAlert({msg: error.response.data.message, error: true})
            console.log(error)
        }
    };

  return (
    <>
        <div className="ml-12">
            <h1 className="text-indigo-600 font-bold text-5xl">Inicia Sesión y Administra tus <span className="text-black">Pacientes</span></h1>
        </div>
        <div className="mr-12 mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
            {alert.msg && <Alert alerta={alert} />}
            <form onSubmit={handleSubmit}>
                <div className="my-5">
                    <label className="text-gray-600 block text-xl font-bold">Correo Electronico</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="border w-full p-3 mt-3 bg-gray-50 rounded-lg" placeholder="Correo de registro"/>
                </div>
                <div className="my-5">
                    <label className="text-gray-600 block text-xl font-bold">Contraseña</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="border w-full p-3 mt-3 bg-gray-50 rounded-lg" placeholder="Ingresa tu contraseña"/>
                </div>
                <input type="submit" value="Iniciar Sesión" className="bg-indigo-700 w-full py-3 rounded-lg text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto px-10"/>
            </form>

            <nav className="mt-10 lg:flex lg:justify-between">
                <Link className="block text-center my-5 text-gray-500" to="/registrar"> No tienes una cuenta?, Registrate</Link>
                <Link className="block text-center my-5 text-gray-500" to="/registrar"> Olvide mi contraseña</Link>
            </nav>
        </div>
    </>
  );
};

export default Login;
