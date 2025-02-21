import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pagina maestra
import AuthLayout from "./layout/AuthLayout"

//Area publica
import Login from "./pages/Login"
import Register from "./pages/Register"
import ConfirmAccount from "./pages/ConfirmAccount"
import ForgotPassword from "./pages/ForgotPassword"
import NewPassword from "./pages/NewPassword";

//Rutas protegidas
import ProtectedRoute from "./layout/ProtectedRoute";
import AdminPatients from "./pages/AdminPatients";

//Context
import { AuthProvider } from "./context/AuthProvider";
import { PatientsProvider } from "./context/PatientsProvider";

function App() {
  // Aquí se definen las rutas y sus componentes
  return (
    <BrowserRouter>
      <AuthProvider>
        <PatientsProvider>
          <Routes>
            <Route path="/" element={<AuthLayout/>}>
              <Route index element={<Login/>}/>
              <Route path="registrar" element={<Register/>}/>
              <Route path="olvide-password" element={<ForgotPassword/>}/>
              <Route path="olvide-password/:token" element={<NewPassword/>}/>
              <Route path="confirmar/:id" element={<ConfirmAccount/>}/>
            </Route>

            <Route path="/admin" element={<ProtectedRoute/>}>
              <Route index element={<AdminPatients/>}/>
            </Route>
          </Routes>
        </PatientsProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
