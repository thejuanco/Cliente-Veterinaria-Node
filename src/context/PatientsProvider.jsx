import { createContext, useState, useEffect } from "react";
import clientAxios from "../config/Axios";

const PatientsContext = createContext();

export const PatientsProvider = ({ children }) => {

    const [pacientes, setPacientes] = useState([])

    return(
        <PatientsContext.Provider 
            value={{pacientes}}
        >
            {children}
        </PatientsContext.Provider>
    )
}


export default PatientsContext;