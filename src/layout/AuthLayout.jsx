import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <h1>Autenticación</h1>
      <p>Esta es la pantalla de autenticación</p>

      <Outlet />
    </>
  );
};

export default AuthLayout;
