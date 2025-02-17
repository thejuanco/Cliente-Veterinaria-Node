import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {

    const { closeSession } = useAuth();

  return (
    <header className="py-8 bg-indigo-600">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="font-bold text-2xl mx-5 text-indigo-200">
          Administrador de pacientes de {""}
          <span className="text-white font-black">Veterinaria</span>
        </h1>
        <nav className="flex flex-col items-center lg:flex-row gap-4 mr-5 mt-5 lg:mt-0">
            <Link to="/admin" className="text-white text-lg font-bold p-2 rounded-lg hover:bg-indigo-500">Pacientes</Link>
            <Link to="/admin" className="text-white text-lg font-bold px-3 py-2 rounded-lg hover:bg-indigo-500">Perfil</Link>
            <button 
                className="text-white text-sm font-bold px-3 rounded-full hover:bg-indigo-500" 
                type="button"
                onClick={closeSession}
            >Cerrar Sesión</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
