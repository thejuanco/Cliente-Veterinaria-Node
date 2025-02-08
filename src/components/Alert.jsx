import React from 'react'

const Alert = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'text-red-600' : 'text-indigo-600'} text-center`}>
        {alerta.msg}
    </div>
  )
}

export default Alert