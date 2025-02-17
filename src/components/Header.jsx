import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-8 bg-indigo-600">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl mx-5 text-indigo-200">
          Administrador de pacientes de {""}
          <span className="text-white font-black">Veterinaria</span>
        </h1>
        <nav className="flex gap-4 mr-5 ">
            <Link to="/admin" className="text-white text-lg font-bold p-2 rounded-lg hover:bg-indigo-500">Pacientes</Link>
            <Link to="/admin" className="text-white text-lg font-bold px-3 py-2 rounded-lg hover:bg-indigo-500">Perfil</Link>
            <button className="text-white text-sm font-bold px-3 rounded-full hover:bg-indigo-500" type="button">Cerrar Sesión</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
