import CartItem from './CartItem';
import CartTotal from './CartTotal';
import EmptyCartMessage from './EmptyCartMessage';

export default function CartView({ carrito, setCarrito }) {
  const eliminarProducto = (index) => {
    setCarrito(prev => {
      const copia = [...prev];
      return copia[index].cantidad > 1
        ? (copia[index].cantidad -= 1, copia)
        : copia.filter((_, i) => i !== index);
    });
  };

  const incrementarCantidad = (index) => {
    setCarrito(prev => {
      const copia = [...prev];
      copia[index].cantidad += 1;
      return copia;
    });
  };

  const decrementarCantidad = (index) => {
    setCarrito(prev => {
      const copia = [...prev];
      if (copia[index].cantidad > 1) copia[index].cantidad -= 1;
      return copia;
    });
  };

  return (
    <section className="carrito-page">
      <h2>Tu carrito 🛒</h2>
      {carrito.length === 0 ? (
        <EmptyCartMessage />
      ) : (
        <>
          <ul>
            {carrito.map((producto, idx) => (
              <CartItem
                key={idx}
                producto={producto}
                onIncrementar={() => incrementarCantidad(idx)}
                onDecrementar={() => decrementarCantidad(idx)}
                onEliminar={() => eliminarProducto(idx)}
              />
            ))}
          </ul>
          <CartTotal carrito={carrito} />
        </>
      )}
    </section>
  );
}