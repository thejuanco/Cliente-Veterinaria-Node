import {useEffect, useState} from "react";
import AdminNav from "../components/AdminNav";
import useAuth from "../hooks/useAuth";
import Alert from "../components/Alert";

const EditPerfil = () => {

  const {auth, updateProfile} = useAuth();
  const [perfil, setPerfil] = useState({});
  const [alerta, setAlerta] = useState({})

  useEffect(() => {
    setPerfil(auth);
  }, [auth])

  const handleSubmit = e => {
    e.preventDefault();
    
    const {nombre, email} = perfil

    if([nombre, email].includes("")){
      setAlerta({msg: "El nombre y el correo son obligatorios", error: true})
      return
    }

    updateProfile(perfil)
  }
  
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
          <form onSubmit={handleSubmit}>
            {alerta.msg && <Alert alerta={alerta}/>}
            <div className="my-3">
              <label className="uppercase font-semibold text-gray-600">
                Nombre:
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="nombre"
                value={perfil.nombre || ""}
                onChange={e => setPerfil({
                  ...perfil,
                  [e.target.name] : e.target.value
                })}
              />
            </div>

            <div className="my-3">
              <label className="uppercase font-semibold text-gray-600">
                Sition web:
              </label>
              <input
                type="text"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="sitioWeb"
                value={perfil.sitioWeb || ""}
                onChange={e => setPerfil({
                  ...perfil,
                  [e.target.name] : e.target.value
                })}
              />

              <div className="my-3">
                <label className="uppercase font-semibold text-gray-600">
                  Telefono:
                </label>
                <input
                  type="text"
                  className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                  name="telefono"
                  value={perfil.telefono || ""}
                  onChange={e => setPerfil({
                    ...perfil,
                    [e.target.name] : e.target.value
                  })}
                />

                <div className="my-3">
                  <label className="uppercase font-semibold text-gray-600">
                    Correo:
                  </label>
                  <input
                    type="text"
                    className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                    name="email"
                    value={perfil.email || ""}
                    onChange={e => setPerfil({
                      ...perfil,
                      [e.target.name] : e.target.value
                    })}
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
