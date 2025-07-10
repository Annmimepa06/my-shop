import BotonCantidad from './BotonCantidad';


export default function CartItem({ producto, onIncrementar, onDecrementar, onEliminar }) {
  return (
    <li>
      {producto.nombre}
      <div className="cantidad-producto-carrito">
       <BotonCantidad accion={onDecrementar} icono="➖" />
<       span>{producto.cantidad}</span>
        <BotonCantidad accion={onIncrementar} icono="➕" />
      </div>
      <span className="precio-producto-carrito">
        ${producto.precio * producto.cantidad}
      </span>
      <button onClick={onEliminar} className="icon-close">❌</button>
    </li>
  );
}