import React from "react";
import '../css/Header.css';
import SearchBar from './SearchBar';
import CartItem from './CartItem';
import CartTotal from './CartTotal';
import HeroBanner from "./HeroBanner";
import EmptyCartMessage from "./EmptyCartMessage";
import { Link } from "react-router-dom";

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
      <HeroBanner />
      <div className="main-content">
        <div className="contenido-principal">
          <SearchBar valor={busqueda} actualizar={setBusqueda} />
        </div>

        <div className="carrito-lateral">
          <h2>CARRITO 🛒</h2>
          <ul>
           {carrito.length === 0 ? <EmptyCartMessage /> : (
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
           <CartTotal carrito={carrito} />
      )}
        </div>
      </div>
    </>
  );
}