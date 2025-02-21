import React from "react";
import AdminNav from "../components/AdminNav";

const ChangePassword = () => {
  return (
    <>
      <AdminNav />
      <h2 className="font-black text-center text-3xl mt-10">
        Cambiar contraseña
      </h2>
      <p className="text-xl mt-5 mb-10 text-center ">
        Cambia tu {""}
        <span className="text-indigo-600 font-bold">contraseña aqui</span>
      </p>
    </>
  );
};

export default ChangePassword;
