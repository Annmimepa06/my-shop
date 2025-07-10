export default function BotonCantidad({ accion, icono }) {
  return (
    <button onClick={accion} className="boton-cantidad">
      {icono}
    </button>
  );
}