import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";

import Alert from "../components/Alert";
import clientAxios from "../config/Axios";

const NewPassword = () => {

    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState({});
    const [tokenValido, setTokenValido] = useState(false);
    const [passwordModificado, setPasswordModificado] = useState(false);

    const params = useParams();
    const {token} = params;

    useEffect(() => {
        // Validar la contraseña
        const comprobarToken = async () => {
            try {
                await clientAxios(`/veterinarios/olvide-password/${token}`);
                setAlert({msg: "Coloca tu nueva contraseña", error: false});
                setTokenValido(true);
                console.log('Cargando la app')
            } catch (error) {
                setAlert({msg: "Hubo un error con el enlace, vuelve a intentarlo", error: true})
            }
        }
        comprobarToken();
    }, [])

    const {msg} = alert;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password.length < 6){
            setAlert({msg: "La contraseña debe tener al menos 6 caracteres", error: true});
            return;
        }

        try {
            const url = `/veterinarios/olvide-password/${token}`;
            const {data} = await clientAxios.post(url, {password})

            setAlert({msg:  data.msg, error: false})
            setPasswordModificado(true)
        } catch (error) {
            setAlert({msg: "Hubo un error al intentar cambiar la contraseña", error: true});
        }
    }

  return (
    <>
      <div className="ml-12">
        <h1 className="text-indigo-600 font-bold text-5xl">
          Recupera tu contraseña y no pierdas acceso a{" "}
          <span className="text-black">tus Pacientes</span>
        </h1>
      </div>
      <div className="mr-12 mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {msg && <Alert alerta={alert} />}

        {tokenValido && (
          <>
            <form onSubmit={handleSubmit}>
              <div className="my-5">
                <label className="text-gray-600 block text-xl font-bold">
                  Nueva Contraseña
                </label>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-lg"
                  placeholder="Tu nueva contraseña"
                />
              </div>
              <input
                type="submit"
                value="Guarda la contraseña"
                className="bg-indigo-700 w-full py-3 rounded-lg text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto px-10"
              />
            </form>
          </>
        )}
        {passwordModificado && (
          <Link className="block text-center my-3 text-gray-500" to="/">
            {" "}
            Iniciar Sesión
          </Link>
        )}
      </div>
    </>
  );
};

export default NewPassword;
