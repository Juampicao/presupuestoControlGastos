import React from 'react'

import { formatearFecha } from '../helpers'
import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

const diccionarioIConos = {
                    Ahorro : IconoAhorro,
                    Comida : IconoComida, 
                    Casa :  IconoCasa,
                    Ocio: IconoOcio,
                    Gastos : IconoGastos,
                    Salud: IconoSalud,
                    Suscripciones: IconoSuscripciones
}



const Gasto = ({ gasto, setGastoEditar }) => {

  
  const handleEliminar = () => {
console.log("eliminando..")
}

  const handleEditar = () => {
  console.log("prueba...")
  setGastoEditar(gasto)
}
  
  return (
    <div> 
        <div className='gasto sombra'>
          <div className='contenido-gasto'>
              <img src={diccionarioIConos[gasto.categoria]} alt="Icono Gasto"
              
              />
                <div className='descripcion-gasto'>
                  <p className='categoria'>{gasto.categoria}</p>
                  <p className='nombre-gasto'> {gasto.nombre}</p>   
                  <p className='fecha-gasto'>
                      Agregado el:{''}
                      <span> {formatearFecha(gasto.fecha)}</span>
                  </p>
              </div>
              
            </div>
        <p className='cantidad-gasto'> ${gasto.cantidad}</p>
        
        <div id='botones_gasto' className='flex flex-col space-y-10'>
          <button
            id='botones_eliminar_gasto'
            className='border border-rounded p-5 text-2xl md:text-4xl bg-red-500 text-white hover:bg-red-600'
            onClick={handleEliminar}>
            Eliminar
            
          
          </button>
          <button
            id='botones_editar_gasto'
            className='border border-rounded p-5  text-2xl md:text-4xl bg-blue-500 text-white hover:bg-blue-600'
            onClick={handleEditar}>
            Editar
          </button>
        </div>

                    
        </div>
        
      </div>
  )
}

export default Gasto