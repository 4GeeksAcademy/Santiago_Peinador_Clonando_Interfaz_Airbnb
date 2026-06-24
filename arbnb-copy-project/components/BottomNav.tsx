import Link from "next/link";
/*
  BottomNav es la navegación inferior para móvil.
  La usamos para simular la barra inferior típica de Airbnb:
  Explorar, Favoritos e Iniciar sesión.
  De momento solo "Explorar" navega al inicio.
  Las otras opciones son botones visuales porque todavía no tenemos
  páginas de favoritos ni login.
*/
const BottomNav = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-20 border-t border-gray-200 bg-white md:hidden">
      <div className="grid grid-cols-3 py-2 text-center text-xs">
        {/* Link interno de Next.js para volver a la Home sin recargar */}
        <Link
          href="/"
          className="flex flex-col items-center gap-1 text-rose-500"
        >
          <span className="text-2xl">⌕</span>
          <span>Explorar</span>
        </Link>
        {/* Botón visual: todavía no existe una página de favoritos */}
        <button
          type="button"
          className="flex flex-col items-center gap-1 text-gray-500"
        >
          <span className="text-2xl">♡</span>
          <span>Favoritos</span>
        </button>
        {/* Botón visual: todavía no existe una página de login */}
        <button
          type="button"
          className="flex flex-col items-center gap-1 text-gray-500"
        >
          <span className="text-2xl">👤</span>
          <span>Iniciar sesión</span>
        </button>
      </div>
    </footer>
  );
};
export default BottomNav;