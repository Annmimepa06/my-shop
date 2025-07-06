import { useState } from 'react';
import Header from './components/Header.jsx';

function App() {
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState(''); 

  return (
    <Header carrito={carrito} setCarrito={setCarrito} 
    busqueda={busqueda}
    setBusqueda={setBusqueda}
    />
  );
}
export default App;





