export default function SearchBar({ valor, actualizar }) {
  return (
    <input
      type="text"
      placeholder="Buscar producto..."
      className="barra-busqueda"
      value={valor}
      onChange={(e) => actualizar(e.target.value)}
    />
  );
}