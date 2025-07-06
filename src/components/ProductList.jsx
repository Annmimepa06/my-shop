import React from "react";
import '../css/ProductList.css';
import { useState } from 'react';

export default function ProductList({ setCarrito, busqueda }) {
  const productos = [
    { id: 1, nombre: 'Estetoscopio', precio: 950, imagen: '/img/estetoscopio.jpg' },
    { id: 2, nombre: 'Termómetro digital', precio: 150, imagen: '/img/termometro.jpg' },
    { id: 3, nombre: 'Termómetro infrarrojo', precio: 320, imagen: '/img/termometroinfa.jpg' },
    { id: 4, nombre: 'Oxímetro de pulso', precio: 590, imagen: '/img/oximetro.jpg' },
    { id: 5, nombre: 'Silla de ruedas', precio: 1200, imagen: '/img/silla.jpg' },
    { id: 6, nombre: 'Collarín', precio: 200, imagen: '/img/collarin.jpg' },
    { id: 7, nombre: 'Glucómetro', precio: 800, imagen: '/img/gluco.jpg' },
    { id: 8, nombre: 'Monitor de signos vitales', precio: 3000, imagen: '/img/monitor.jpg' },
    { id: 9, nombre: 'Bastón', precio: 250, imagen: '/img/baston.jpg' },
    { id: 10, nombre: 'Baumanometro', precio: 690, imagen: '/img/bauma.jpg' }
  ];
  const [mensaje, setMensaje] = useState([]);
const agregarAlCarrito = (productoNuevo) => {
  setCarrito(prevCarrito => {
    console.log("Producto nuevo:", productoNuevo);
    console.log("Carrito actual:", prevCarrito);

    const index = prevCarrito.findIndex(p => Number(p.id) === Number(productoNuevo.id));
    if (index !== -1) {
      const copia = [...prevCarrito];
      copia[index].cantidad += 1;
      console.log("Actualizando cantidad:", copia[index]);
      return copia;
    } else {
      const productoLimpio = {
        id: productoNuevo.id,
        nombre: productoNuevo.nombre,
        precio: productoNuevo.precio,
        imagen: productoNuevo.imagen,
        cantidad: 1
      };
      console.log("Agregando nuevo producto:", productoLimpio);
      return [...prevCarrito, productoLimpio];
    }
  });

  setMensaje(`✅ ${productoNuevo.nombre} agregado al carrito`);
  setTimeout(() => setMensaje(''), 2000);
};

//   const agregarAlCarrito = (productoNuevo) => {
//   setCarrito(prevCarrito => {
//     const index = prevCarrito.findIndex(p => p.id === productoNuevo.id);

//     if (index !== -1) {
//       const copia = [...prevCarrito];
//       copia[index].cantidad += 1;
//       return copia;
//     } else {
//       return [
//         ...prevCarrito,
//         {
//           id: productoNuevo.id,
//           nombre: productoNuevo.nombre,
//           precio: productoNuevo.precio,
//           imagen: productoNuevo.imagen,
//           cantidad: 1
//         }
//       ];
//     }
//   });
//   setMensaje(`✅ ${productoNuevo.nombre} agregado al carrito`);
//   setTimeout(() => setMensaje(''), 2000);
// };

  const productosFiltrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section className="product-section">
      <h2 className="section-title">LISTADO DE PRODUCTOS</h2>
      {mensaje && (
  <div className="notificacion">
    {mensaje}
  </div>
)}
      <div className="product-grid">
        {productosFiltrados.map(producto => (
          <div key={producto.id} className="product-card">
            <img src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.nombre}</h3>
            <p>${producto.precio}</p>
            <button onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
          </div>
        ))}
      </div>
    </section>
  );
}