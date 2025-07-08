import { useState } from 'react';
import Header from './components/Header.jsx';
import useLocalStorage from './hooks/useLocalStorage.js';

function App() {
  const [carrito, setCarrito] = useLocalStorage("carrito", []);
  const [busqueda, setBusqueda] = useState(''); 

  return (
    <Header carrito={carrito} setCarrito={setCarrito} 
    busqueda={busqueda}
    setBusqueda={setBusqueda}
    />
  );
}
export default App;




