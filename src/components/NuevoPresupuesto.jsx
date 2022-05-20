import { useState } from 'react'
import Mensaje from './Mensaje.jsx'


const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {


    const  [mensaje,setMensaje] = useState('')

    // Prevent default
    const handlePresupuesto = (e) => {
        e.preventDefault();
        
// Verificacion definir presupuesto 
        
        if (!Number(presupuesto) || Number(presupuesto) < 0){
            setMensaje("No es un presupuesto Valido")
            
            return 
        } 
// Esto hace que cuando 
        setMensaje('')
        setIsValidPresupuesto(true)

}

    return (
      
      <>
          <div className='contenedor-presupuesto contenedor sombra'>
              
              <form onSubmit={handlePresupuesto} className='formulario'>
                  <div className='campo'>
                      <label > Definir Presupuesto </label>
                      <input
                          type="number"
                          placeholder='Añade tu presupuesto'
                          className='nuevo-presupuesto'
                          value={presupuesto}     
                          onChange={e => setPresupuesto(Number(e.target.value))}
                      />
                      
                  </div>

                    <input type="submit" value="añadir" />
                    
                    {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>} 
              </form>
          </div>
      </>
  )
}

export default NuevoPresupuesto