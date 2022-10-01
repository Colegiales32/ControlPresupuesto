import React from 'react'
import Nuevopresupuesto from './Nuevopresupuesto'
import { ControlPresupuesto } from './ControlPresupuesto'


const Header = ({gastos,setGastos,presupuesto,setPresupuesto,isValidPresupuesto,setIsValidPresupuesto,presupuestoActualizado,setPresupuestoActualizado,mensaje,setMensaje}) => {
  return (
    <header>
     <h1>Planificador de Gastos</h1>
   {isValidPresupuesto ? (
    <ControlPresupuesto
    gastos= {gastos}
    setGastos = {setGastos}
    presupuesto={presupuesto}
    setPresupuesto={setPresupuesto}
    setIsValidPresupuesto={setIsValidPresupuesto}
    presupuestoActualizado={presupuestoActualizado}
    setPresupuestoActualizado={setPresupuestoActualizado}
    setMensaje = {setMensaje}
    mensaje = {mensaje}
    />
   ) : (
   <Nuevopresupuesto
     presupuesto={presupuesto}
     setPresupuesto ={setPresupuesto}
     setIsValidPresupuesto={setIsValidPresupuesto}
     mensaje = {mensaje}
     setMensaje = {setMensaje}
   />
   )}
    </header>
   
  )
}

export default Header