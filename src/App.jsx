import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthLayout from "./layout/AuthLayout"
import Login from "./pages/Login"

function App() {

  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<AuthLayout/>}>
          <Route index element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
