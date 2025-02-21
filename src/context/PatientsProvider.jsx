import { createContext, useState, useEffect } from "react";
import clientAxios from "../config/Axios";
import useAuth from "../hooks/useAuth"

const PatientsContext = createContext();

export const PatientsProvider = ({ children }) => {

    const [pacientes, setPacientes] = useState([])
    const [paciente, setPaciente] = useState({})
    const { auth } = useAuth();

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
    }, [auth])

    const savePatient = async (paciente) => {
        //Configura el objeto de autorización
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        //Evula si el paciente es creado o editado
        if(paciente.id){
            try {
                //Envía la petición para crear un paciente
                const {data} = await clientAxios.put(`/pacientes/${paciente.id}`, paciente, config);
                const pacienteEditado = pacientes.map(pacienteState => pacienteState._id === data._id ? data : pacienteState)
                setPacientes(pacienteEditado)
            } catch (error) {
                console.log(error.response.data.message)
            }
        } else {
            try {
                //Envía la petición para crear un paciente
                const {data} = await clientAxios.post("/pacientes", paciente, config);
                //Elimina los datos innecesarios o que no nos interesan
                const { createdAt,  updatedAt, __v, ...pacienteAlmacenado } = data;
                setPacientes([pacienteAlmacenado, ...pacientes])
            } catch (error) {
                console.log(error.response.data.message);
            }
        }
    }

    const editPatient = (paciente) => {
        setPaciente(paciente)
    }
    
    const deletePatient = async (id) => {
        const confirmar = confirm("¿Estas seguro de eliminar este registro?");
        if(confirmar){
            try {
                //Configura el objeto de autorización
                const token = localStorage.getItem("token")
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const {data} = await clientAxios.delete(`/pacientes/${id}`, config);
                const pacientesActualizado = pacientes.filter(pacientesState => pacientesState._id !== id);
                setPacientes(pacientesActualizado);
            } catch (error) {
                console.log(error.response.data.message);
            }
        }
    }

    return(
        <PatientsContext.Provider 
            value={{pacientes, savePatient, editPatient, paciente, deletePatient}}
        >
            {children}
        </PatientsContext.Provider>
    )
}


export default PatientsContext;