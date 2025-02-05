import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <h1>Administración de Pacientes de Veterinario</h1>

      <Outlet />
    </>
  );
};

export default AuthLayout;
