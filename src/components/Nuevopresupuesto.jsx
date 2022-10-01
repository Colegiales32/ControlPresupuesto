import { useState } from 'react'
import Mensaje from './Mensaje'


const Nuevopresupuesto = ({presupuesto, setPresupuesto,setIsValidPresupuesto,mensaje,setMensaje}) => {
  

const handlePresupuesto = (e) =>{
    e.preventDefault();

    if(presupuesto < 0){
       setMensaje('El presupuesto no es valido')

       return //Detenemos la ejecucion de la funcion
    }
      setMensaje('') //Si no se cumple la anterior como se detuvo la ejecucion de la funcion continuara por aca (video 97)
     setIsValidPresupuesto(true)

}

  return (
  <div className='contenedor-presupuesto contenedor sombra'>
    <form onSubmit={handlePresupuesto} className='formulario'>
<div className='campo'>
    <label>Definir Presupuesto</label>

<input className='nuevo-presupuesto' type='number' placeholder='Añade tu Presupuesto' value={presupuesto} onChange={e =>setPresupuesto(Number(e.target.value))}/>

</div>
<input type="submit" value='Añadir'/>
    {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
    </form>
  </div>

  )
}

export default Nuevopresupuesto