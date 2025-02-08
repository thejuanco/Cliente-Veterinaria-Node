import React from 'react'

const Alert = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'text-red-600 font-semibold' : 'text-indigo-600 font-semibold'} text-center`}>
        {alerta.msg}
    </div>
  )
}

export default Alert