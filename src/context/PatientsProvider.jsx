import { createContext, useState, useEffect } from "react";
import clientAxios from "../config/Axios";

const PatientsContext = createContext();

export const PatientsProvider = ({ children }) => {

    const [pacientes, setPacientes] = useState([])

    const savePatient = async (paciente) => {
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
            console.log(error.response.data.msg);
        }
    }

    return(
        <PatientsContext.Provider 
            value={{pacientes, savePatient}}
        >
            {children}
        </PatientsContext.Provider>
    )
}


export default PatientsContext;