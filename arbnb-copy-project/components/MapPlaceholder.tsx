import Image from "next/image";
/*
  MapPlaceholder representa el área de mapa del catálogo.
  No vamos a usar un mapa real con Google Maps o Leaflet.
  En su lugar usamos una imagen fake de mapa generada para el proyecto.
  La imagen debe estar guardada en:
  public/map-homes.webp
  En Next.js, los archivos dentro de public se llaman desde "/".
*/
const MapPlaceholder = () => {
  return (
    <aside className="h-96 overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 md:sticky md:top-28 md:h-[calc(100vh-8rem)]">
      <div className="relative h-full w-full">
        {/* Imagen fake del mapa con pins y precios */}
        <Image
          src="/map-homes.webp"
          alt="Mapa de alojamientos disponibles"
          fill
          sizes="(max-width: 768px) 100vw, 460px"
          className="object-cover"
        />
      </div>
    </aside>
  );
};
export default MapPlaceholder;