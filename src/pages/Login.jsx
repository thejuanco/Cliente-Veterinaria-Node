import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
        <div className="ml-12">
            <h1 className="text-indigo-600 font-bold text-5xl">Inicia Sesión y Administra tus <span className="text-black">Pacientes</span></h1>
        </div>
        <div className="mr-12 mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
            <form>
                <div className="my-5">
                    <label className="text-gray-600 block text-xl font-bold">Correo Electronico</label>
                    <input type="email" className="border w-full p-3 mt-3 bg-gray-50 rounded-lg" placeholder="Correo de registro"/>
                </div>
                <div className="my-5">
                    <label className="text-gray-600 block text-xl font-bold">Contraseña</label>
                    <input type="password" className="border w-full p-3 mt-3 bg-gray-50 rounded-lg" placeholder="Ingresa tu contraseña"/>
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
