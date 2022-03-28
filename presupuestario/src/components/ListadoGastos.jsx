import React from 'react'

const ListadoGastos = ({gastos}) => {
  return (
      <div className='listado-gastos contenedor'>
          <h2> {gastos.length ? 'Listado Gastos': 'No hay Gastos'}</h2>
      </div>
  )
}

export default ListadoGastos