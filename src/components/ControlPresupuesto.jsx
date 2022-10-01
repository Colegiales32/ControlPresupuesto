import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Mensaje from "./Mensaje";

export const ControlPresupuesto = ({
  presupuesto,
  gastos,
  setGastos,
  setPresupuesto,
  setIsValidPresupuesto,
  presupuestoActualizado,
  setPresupuestoActualizado,
  setMensaje,
  mensaje,
}) => {
  const [porcentaje, setPorcentaje] = useState(0);
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  const totalGastado = gastos.reduce(
    (total, gasto) => gasto.importe + total,
    0
  );

  const totalDisponible = presupuesto - totalGastado;

  useEffect(() => {
    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setGastado(totalGastado);
    setDisponible(totalDisponible);
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1000);
  }, [gastos]);

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString("en-Us", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleResetApp = () => {
    const resultado = confirm("¿Deseas reiniciar presupuesto y gastos?");
    if (resultado) {
      setGastos([]);
      setPresupuesto(0);
      setIsValidPresupuesto(false);
    }
  };

  const handleEditApp = (e) => {
    e.preventDefault();
    const presupuestoEdit = presupuesto + presupuestoActualizado;
    const resultado = confirm("¿Deseas modificar el presupuesto?");
    const escondido = document.getElementById('escondido')
    const aparece = () => {
      escondido.classList.remove('negativo-hidden')
      escondido.classList.add('negativo-vista')
    }
    const desaparece=()=> {
      escondido.classList.add('negativo-hidden')
      escondido.classList.remove('negativo-vista')
    }
    if (presupuestoActualizado >= 1 && resultado) {
      setPresupuesto(presupuestoEdit);
      setPresupuestoActualizado(0);
    } else if (presupuestoActualizado <= 1 && resultado) {
     aparece()
      setTimeout(() => {
        desaparece();
      }, 6000);

      return;
    }
  };

  useEffect(() => {
    const nuevoPorcentaje = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);

    setGastado(totalGastado);
    setDisponible(totalDisponible);
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1000);
  }, [presupuesto]);

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
            trailColor: "#bebebe",
            textColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
          })}
          value={porcentaje}
          text={`${porcentaje}% Gastado`}
        />
      </div>

      <div className="editar-presupuesto sombra-editar">
        <form onSubmit={handleEditApp} className="formulario-editar">
          <div className="campo">
            <label className="label-editar">Agregar dinero</label>
            <input
              id="agregar-presupuesto"
              type="number"
              placeholder="Edita tu Presupuesto"
              value={presupuestoActualizado}
              onChange={(e) =>
                setPresupuestoActualizado(Number(e.target.value))
              }
            />
          </div>
          <div className="lugar-mensaje">
          <div className={`alerta negativo-hidden`} id='escondido'>Monto invalido</div>
          </div>
          <input className="input-editar" type="submit" value="Agregar" />

        </form>

        <button className="reset-app" type="button" onClick={handleResetApp}>
          Resetear App
        </button>
      </div>
      <div>
        <p>
          <span>Presupuesto: </span>
          {formatearCantidad(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? "negativo" : ""}`}>
          <span>Disponible: </span>
          {formatearCantidad(totalDisponible)}
        </p>
        <p>
          <span>Gastado: </span>
          {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
};
