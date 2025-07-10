export default function CartTotal({ carrito }) {
  const total = carrito.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  return (
    <div className="cart-total">
      <h3>Total:</h3>
      <span className="total-pagar">${total}</span>
    </div>
  );
}