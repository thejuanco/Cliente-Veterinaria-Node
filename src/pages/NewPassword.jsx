import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import Alert from "../components/Alert";
import clientAxios from "../config/Axios";

const NewPassword = () => {

    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState({})
    const [tokenValido, setTokenValido] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    const params = useParams();
    const {token} = params;

    useEffect(() => {
        // Validar la contraseña
        const comprobarToken = async () => {
            try {
                await clientAxios(`/veterinarios/olvide-password/${token}`);
                setAlert({msg: "Coloca tu nueva contraseña", error: false});
                setTokenValido(true);
            } catch (error) {
                setAlert({msg: "Hubo un error con el enlace, vuelve a intentarlo", error: true})
            }
        }
        comprobarToken();
    }, [])

    const {mgs} = alert;

  return (
    <>
      <div className="ml-12">
        <h1 className="text-indigo-600 font-bold text-5xl">
          Recupera tu contraseña y no pierdas acceso a{" "}
          <span className="text-black">tus Pacientes</span>
        </h1>
      </div>
      <div className="mr-12 mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {mgs && <Alert alerta={alert} />}
        
        {tokenValido ? (
            <form>
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
        ) : (<h2 className="text-center font-semibold">Vuelve a intentarlo</h2>)}
      </div>
    </>
  );
};

export default NewPassword;
