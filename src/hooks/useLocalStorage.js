import { useState, useEffect } from "react";

function useLocalStorage(key, valorInicial) {
  const [valor, setValor] = useState(() => {
    const almacenado = localStorage.getItem(key);
    return almacenado ? JSON.parse(almacenado) : valorInicial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(valor));
  }, [key, valor]);

  return [valor, setValor];
}

export default useLocalStorage;