import React, {useState, useEffect} from "react";
import AdminNav from "../components/AdminNav";
import Alert from "../components/Alert";
import useAuth from "../hooks/useAuth";

const ChangePassword = () => {
  const {savePassword} = useAuth();
  const [alerta, setAlerta] = useState({})
  const [password, setPassword] = useState({
    pwd_actual: "",
    pwd_nuevo: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if(Object.values(password).some(campo => campo === "")){
      setAlerta({msg: "Todos los campos son obligatorios", error: true})
      return
    }

    if(password.pwd_nuevo.length < 6){
      setAlerta({msg: "La contraseña debe tener minimo 6 caracteres", error: true})
      return
    }

    savePassword(password)
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
                type="password"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="pwd_actual"
                placeholder="Escribe tu contraseña actual"
                // value={perfil.sitioWeb || ""}
                onChange={(e) =>
                  setPassword({
                    ...password,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            </div>

            <div className="my-3">
              <label className="uppercase font-semibold text-gray-600">
                Nueva contraseña
              </label>
              <input
                type="password"
                className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                name="pwd_nuevo"
                placeholder="Escribe tu nueva contraseña"
                onChange={(e) =>
                  setPassword({
                    ...password,
                    [e.target.name]: e.target.value,
                  })
                }
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
