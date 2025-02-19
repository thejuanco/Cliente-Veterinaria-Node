import { createContext, useState, useEffect } from "react";
import clientAxios from "../config/Axios";

const PatientsContext = createContext();

export const PatientsProvider = ({ children }) => {
    return(
        <PatientsContext.Provider value={{}}>
            {children}
        </PatientsContext.Provider>
    )
}


export default PatientsContext;