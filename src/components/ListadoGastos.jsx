import React from 'react'
import Gasto from './Gasto'


const ListadoGastos = ({gastos, setGastoEditar}) => {
  return (
    <div className='listado-gastos contenendor'>
      
      <h2>{gastos.length ? 'Gastos' : 'No hay gastos'} </h2>

      {gastos.map(gasto => (
        <Gasto
          key={gasto.id}
          gasto={gasto}
          setGastoEditar={setGastoEditar}

        
        />
      ))}
    </div>
  )
}

export default ListadoGastos