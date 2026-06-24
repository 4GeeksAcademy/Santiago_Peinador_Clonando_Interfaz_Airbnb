import Link from "next/link";
import Image from "next/image";
/*
  HomeHeader es la cabecera principal de la página de inicio.
  Contiene:
  - Logo de Airbnb en móvil.
  - Texto "airbnb" en escritorio.
  - Campo de búsqueda.
  - Botón Buscar que lleva al catálogo.
  - Iconos visuales de menú y usuario.
  Recibe el texto de búsqueda y la función para actualizarlo
  desde app/page.tsx, porque el estado principal vive en la página.
*/
interface HomeHeaderProps {
  searchText: string;
  onSearchChange: (value: string) => void;
}
const HomeHeader = ({ searchText, onSearchChange }: HomeHeaderProps) => {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-100 bg-white px-4 py-4">
      <nav className="mx-auto flex max-w-7xl items-center gap-3">
        {/* Logo móvil y marca en escritorio */}
        <div className="flex h-11 w-11 shrink-0 items-center justify-center md:w-auto">
          {/* Logo optimizado con el componente Image de Next.js */}
          <Image
            src="/airbnb-logo.webp"
            alt="Airbnb logo"
            width={32}
            height={32}
            className="block h-8 w-8 object-contain md:hidden"
          />
          <span className="hidden text-xl font-bold text-rose-500 md:inline">
            airbnb
          </span>
        </div>
        {/* Campo de búsqueda controlado con useState desde la página */}
        <div className="flex flex-1 items-center gap-3 rounded-full border border-gray-200 bg-white px-4 py-3 shadow-sm">
          <span className="text-sm">🔍</span>
          <input
            value={searchText}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Empieza a buscar"
            className="w-full bg-transparent text-sm font-medium outline-none placeholder:text-gray-500"
          />
          {/* Navegación interna a la página de catálogo */}
          <Link
            href="/catalog"
            className="rounded-full bg-rose-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-rose-600"
          >
            Catálogo
          </Link>
        </div>
        {/* Botón visible solo en escritorio */}
        <button className="hidden rounded-full border border-gray-200 px-4 py-2 text-sm font-medium md:block">
          Pon tu casa en Airbnb
        </button>
        {/* Botones visuales de menú y usuario */}
        <button
          type="button"
          aria-label="Abrir menú"
          className="rounded-full border border-gray-200 p-3 text-lg shadow-sm"
        >
          ☰
        </button>
        <button
          type="button"
          aria-label="Abrir usuario"
          className="rounded-full border border-gray-200 p-3 text-lg shadow-sm"
        >
          👤
        </button>
      </nav>
    </header>
  );
};
export default HomeHeader;