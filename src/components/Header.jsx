import React from "react";
import '../css/Header.css';
import ProductList from "./ProductList";
import SearchBar from './SearchBar';
import CartItem from './CartItem';

export default function Header({ carrito, setCarrito, busqueda, setBusqueda }) {
  const eliminarProducto = (indexAEliminar) => {
    setCarrito(prev => {
      const copia = [...prev];
      if (copia[indexAEliminar].cantidad > 1) {
        copia[indexAEliminar].cantidad -= 1;
        return copia;
      } else {
        return copia.filter((_, index) => index !== indexAEliminar);
      }
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
    if (copia[index].cantidad > 1) {
      copia[index].cantidad -= 1;
    }
    return copia;
  });
};
  return (
    <>
      <div className="hero-banner">
        <h1 className="hero-title">M  E  D  E  X  I  A</h1>
      </div>

      <div className="main-content">
        <div className="contenido-principal">
          <SearchBar valor={busqueda} actualizar={setBusqueda} />
          
          <ProductList setCarrito={setCarrito} busqueda={busqueda} />
        </div>

        <div className="carrito-lateral">
          <h2>CARRITO 🛒</h2>
          <ul>
            {carrito.length === 0 ? (
         <p>El carrito está vacío</p>
          ) : (
          carrito.map((producto, idx) => (
           <CartItem
          key={idx}
          producto={producto}
          onIncrementar={() => incrementarCantidad(idx)}
          onDecrementar={() => decrementarCantidad(idx)}
          onEliminar={() => eliminarProducto(idx)}
    />
  ))
)}
          </ul>

          {carrito.length > 0 && (
            <div className="cart-total">
              <h3>Total:</h3>
              <span className="total-pagar">
                ${carrito.reduce((total, p) => total + p.precio * p.cantidad, 0)}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}