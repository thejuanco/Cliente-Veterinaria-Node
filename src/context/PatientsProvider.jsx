import { createContext, useState, useEffect } from "react";
import clientAxios from "../config/Axios";

const PatientsContext = createContext();

export const PatientsProvider = ({ children }) => {

    const [pacientes, setPacientes] = useState([])
    const [paciente, setPaciente] = useState({})

    useEffect(() => {
        const getPatients = async () => {
            try {
                //Obtiene el token de la sesión
                const token = localStorage.getItem("token")
                if(!token) return
                //Configura la autorización
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                //Extrae los datos de la petición
                const { data } = await clientAxios.get("/pacientes", config);
                //Actualiza el estado con los datos obtenidos
                setPacientes(data);
            } catch (error) {
                console.error(error.response.data.message)
            }
        }
        getPatients();
    }, [])

    const savePatient = async (paciente) => {
        if(paciente.id){
            console.log("Editando")
        } else {
            console.log("Creando")
        }

        return; 
        try {
            //Configura el objeto de autorización
            const token = localStorage.getItem("token")
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            //Envía la petición para crear un paciente
            const {data} = await clientAxios.post("/pacientes", paciente, config);
            //Elimina los datos innecesarios o que no nos interesan
            const { createdAt,  updatedAt, __v, ...pacienteAlmacenado } = data;
            setPacientes([pacienteAlmacenado, ...pacientes])
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    const editPatient = (paciente) => {
        setPaciente(paciente)
    }

    return(
        <PatientsContext.Provider 
            value={{pacientes, savePatient, editPatient, paciente}}
        >
            {children}
        </PatientsContext.Provider>
    )
}


export default PatientsContext;