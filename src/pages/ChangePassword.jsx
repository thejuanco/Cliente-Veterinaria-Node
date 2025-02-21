import React, {useState, useEffect} from "react";
import AdminNav from "../components/AdminNav";
import Alert from "../components/Alert";

const ChangePassword = () => {
  const [alerta, setAlerta] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

  }

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
      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          <form onSubmit={handleSubmit}>
            {alerta.msg && <Alert alerta={alerta} />}

            <div className="my-3">
              <label className="uppercase font-semibold text-gray-600">
                Contraseña actual
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="sitioWeb"
                placeholder="Escribe tu contraseña actual"
                // value={perfil.sitioWeb || ""}
                // onChange={(e) =>
                //   setPerfil({
                //     ...perfil,
                //     [e.target.name]: e.target.value,
                //   })
                // }
              />
            </div>

            <div className="my-3">
              <label className="uppercase font-semibold text-gray-600">
                Nueva contraseña
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="sitioWeb"
                placeholder="Escribe tu nueva contraseña"
                
              />
            </div>

            <input
              type="submit"
              value="Actualizar contraseña"
              className="bg-indigo-700 px-10 py-3 font-semibold text-white rounded-lg uppercase w-full mt-5"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
