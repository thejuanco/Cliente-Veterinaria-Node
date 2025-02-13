import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pagina maestra
import AuthLayout from "./layout/AuthLayout"

//Area publica
import Login from "./pages/Login"
import Register from "./pages/Register"
import ConfirmAccount from "./pages/ConfirmAccount"
import ForgotPassword from "./pages/ForgotPassword"

function App() {
  // Aquí se definen las rutas y sus componentes
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<AuthLayout/>}>
          <Route index element={<Login/>}/>
          <Route path="registrar" element={<Register/>}/>
          <Route path="olvide-password" element={<ForgotPassword/>}/>
          <Route path="confirmar/:id" element={<ConfirmAccount/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
