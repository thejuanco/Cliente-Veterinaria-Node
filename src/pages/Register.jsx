import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="ml-12">
        <h1 className="text-indigo-600 font-bold text-5xl">
          Crea tu cuenta y Administra{" "}
          <span className="text-black">tus Pacientes</span>
        </h1>
      </div>

      <div className="mr-12 md:mt-2 shadow-lg px-5 py-10 rounded-xl bg-white">
        <form>
          <div className="my-1">
            <label className="text-gray-600 block text-xl font-bold">
              Nombre
            </label>
            <input
              type="text"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-lg"
              placeholder="Tu nombre"
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
