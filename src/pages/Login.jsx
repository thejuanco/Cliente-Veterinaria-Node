import React from "react";

const Login = () => {
  return (
    <>
        <div className="ml-12">
            <h1 className="text-indigo-600 font-bold text-5xl">Inicia Sesión y Administra tus <span className="text-black">Pacientes</span></h1>
        </div>
        <div className="mr-12">
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
        </div>
    </>
  );
};

export default Login;
