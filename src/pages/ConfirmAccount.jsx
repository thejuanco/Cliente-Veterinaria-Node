import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom' //Ayuda a leer los parametros de la url

import Alert from '../components/Alert'
import clientAxios from '../config/Axios'

const ConfirmAccount = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)
  const [cargando, setCargando] = useState(true)
  const [alerta, setAlerta] = useState({})

  const params = useParams();
  console.log(params.id)

  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `/veterinarios/confirmar/${params.id}`
        const { data } = await clientAxios(url)
        console.log(data)
        setCuentaConfirmada(true)
        setAlerta({
          msg: data.msg,
          error: false
        })
        
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
      setCargando(false)
    }
    confirmarCuenta()
  }, [])

  return (
    <>
      <div className="ml-12">
        <h1 className="text-indigo-600 font-bold text-5xl">Confirma tu cuenta y Comienza a <span className="text-black">tus Pacientes</span></h1>
      </div>
      <div className="mr-12 mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {!cargando && <Alert
          alerta={alerta}
        />}

        {cuentaConfirmada && (
          <Link className="block text-center my-5 text-gray-500" to="/">Inicia Sesión</Link>
        )}
      </div>
    </>
  )
}

export default ConfirmAccount