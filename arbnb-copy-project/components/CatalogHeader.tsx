import Link from "next/link";
/*
  CatalogHeader es la cabecera de la página de catálogo.
  Contiene:
  - Botón para volver a la Home.
  - Una barra visual con el texto de búsqueda.
  - Un botón visual de filtros.
  Esta cabecera no maneja lógica todavía.
  Solo sirve para mostrar la parte superior del catálogo.
*/
const CatalogHeader = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-100 bg-white px-4 py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        {/* Navegación interna para volver a la página de inicio */}
        <Link
          href="/"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-xl shadow-sm"
          aria-label="Volver al inicio"
        >
          ←
        </Link>
        {/* Barra compacta de búsqueda visual */}
        <div className="flex flex-1 flex-col items-center rounded-full border border-gray-200 px-4 py-2 shadow-sm">
          <span className="text-sm font-semibold">
            Alojamientos disponibles
          </span>

          <span className="text-xs text-gray-500">
            Cualquier semana · Añade viajeros
          </span>
        </div>
        {/* Botón visual de filtros */}
        <button
          type="button"
          aria-label="Abrir filtros"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-xl shadow-sm"
        >
          ⚙
        </button>
      </nav>
    </header>
  );
};
export default CatalogHeader;