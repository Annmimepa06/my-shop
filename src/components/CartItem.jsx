export default function CartItem({ producto, onIncrementar, onDecrementar, onEliminar }) {
  return (
    <li>
      {producto.nombre}
      <div className="cantidad-producto-carrito">
        <button onClick={onDecrementar} className="boton-cantidad">➖</button>
        <span>{producto.cantidad}</span>
        <button onClick={onIncrementar} className="boton-cantidad">➕</button>
      </div>
      <span className="precio-producto-carrito">
        ${producto.precio * producto.cantidad}
      </span>
      <button onClick={onEliminar} className="icon-close">❌</button>
    </li>
  );
}