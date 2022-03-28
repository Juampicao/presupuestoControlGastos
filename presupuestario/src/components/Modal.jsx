import React from 'react'
import { useState } from 'react';
import CerrarBtn from '../img/cerrar.svg';
import Mensaje from './Mensaje'





const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto }) => {
     
    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')

    


    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
        setModal(false)
            
        }, 500);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios')
            setTimeout(() => {
                setMensaje('')
            }, 3000);
           
        } 
  
        guardarGasto({nombre,cantidad,categoria});

    }

  return (
      <div className='modal'>
          <div className='cerrar-modal'>
              <img src={CerrarBtn}
                  alt="Cerrar Modal"
                  onClick={ocultarModal}
              />
          </div>
          
          <form
              onSubmit={handleSubmit}
              className={`formulario ${animarModal ? "animar" : 'cerrar'} `}
          >
              <legend htmlFor="nombre"> Nuevo Gasto</legend>
              {mensaje && <Mensaje tipo="error"> {mensaje} </Mensaje>}

              <div className='campo'>
                  <label htmlFor="nombre"> Nombre Gasto </label>
                  <input type="text"
                      name=""
                      id="nombre"
                      placeholder='Añade el Nombre del Gasto'
                      value={nombre}
                      onChange={e => setNombre(e.target.value)} 
                      />
              </div>

               <div className='campo'>
                  <label htmlFor="cantidad"> Cantidad </label>
                  <input type="number"
                      name=""
                      id="cantidad"
                      placeholder='Cantidad'
                      value={cantidad}
                      onChange={e => setCantidad(Number(e.target.value))}
                  />
              </div>

              <div className='campo'>
                  <label htmlFor="categoria"> Categoria </label>
                  <select
                      name=""
                      id="categoria"
                       value={categoria}
                      onChange={e => setCategoria(e.target.value)} 
                  >
                      <option value=""> -- Select -- </option>
                      <option value="Ahorro"> Ahorro </option>
                      <option value="Comida"> Comida </option>
                      <option value="Varios"> Varios </option>
                      <option value="Casa"> Casa </option>
                      <option value="Ocio"> Ocio </option>
                      <option value="Gastos Varios"> Gastos Varios </option>
                      <option value="Salud"> Salud </option>
                      <option value="Suscripciones"> Suscripciones </option>


                 </select>
              </div>
              
            <input type="submit"  value="Anotar Gasto"/>


         </form>
      </div>
  )
}

export default Modal