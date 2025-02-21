import React from "react";
import AdminNav from "../components/AdminNav";

const EditPerfil = () => {
  return (
    <>
      <AdminNav />
      <h2 className="font-black text-center text-3xl mt-10">Editar Perfil</h2>
      <p className="text-xl mt-5 mb-10 text-center ">
        Modifica tu {""}
        <span className="text-indigo-600 font-bold">información</span>
      </p>

      <div className="flex justify-center">
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          <form>
            <div className="my-3">
              <label className="uppercase font-semibold text-gray-600">
                Nombre:
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="nombre"
              />
            </div>

            <div className="my-3">
              <label className="uppercase font-semibold text-gray-600">
                Sition web:
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="web"
              />

              <div className="my-3">
                <label className="uppercase font-semibold text-gray-600">
                  Telefono:
                </label>
                <input
                  type="text"
                  className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                  name="telefono"
                />

                <div className="my-3">
                  <label className="uppercase font-semibold text-gray-600">
                    Correo:
                  </label>
                  <input
                    type="text"
                    className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                    name="email"
                  />
                </div>

                <input
                  type="submit"
                  value="Guardar cambios"
                  className="bg-indigo-700 px-10 py-3 font-semibold text-white rounded-lg uppercase w-full mt-5"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditPerfil;
