import React from 'react'
import Nuevopresupuesto from './Nuevopresupuesto'
import { ControlPresupuesto } from './ControlPresupuesto'

const Header = ({gastos,setGastos,presupuesto,setPresupuesto,isValidPresupuesto,setIsValidPresupuesto,presupuestoActualizado,setPresupuestoActualizado}) => {
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
    />
   ) : (
   <Nuevopresupuesto
     presupuesto={presupuesto}
     setPresupuesto ={setPresupuesto}
     setIsValidPresupuesto={setIsValidPresupuesto}
   />
   )}
    </header>
   
  )
}

export default Header