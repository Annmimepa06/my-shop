import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartView from './components/CartView';
import useLocalStorage from './hooks/useLocalStorage';
import { useState } from 'react';

function App() {
  const [carrito, setCarrito] = useLocalStorage("carrito", []);
  const [busqueda, setBusqueda] = useState('');

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header
                carrito={carrito}
                setCarrito={setCarrito}
                busqueda={busqueda}
                setBusqueda={setBusqueda}
              />
              <ProductList
                setCarrito={setCarrito}
                busqueda={busqueda}
              />
            </>
          }
        />
        <Route
          path="/carrito"
          element={
            <CartView
              carrito={carrito}
              setCarrito={setCarrito}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;




