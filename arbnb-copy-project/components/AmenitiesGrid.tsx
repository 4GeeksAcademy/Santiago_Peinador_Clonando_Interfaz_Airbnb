import type { Amenity } from "@/types/property";
/*
  AmenitiesGrid muestra los servicios del alojamiento.
  Cada servicio tiene:
  - icon: un icono visual, ahora mismo usando emojis.
  - label: el nombre del servicio.
  Este componente recibe un array de servicios y los pinta en una cuadrícula.
  No tiene estado propio ni lógica complicada.
*/
interface AmenitiesGridProps {
  amenities: Amenity[];
}
const AmenitiesGrid = ({ amenities }: AmenitiesGridProps) => {
  return (
    <section className="mt-6 border-t border-gray-200 pt-6">
      <h2 className="text-xl font-bold">Qué ofrece este alojamiento</h2>
      {/* Grid responsive: una columna en móvil, dos columnas en pantallas más grandes */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {amenities.map((amenity) => (
          <div
            key={amenity.label}
            className="flex items-center gap-3 rounded-2xl border border-gray-200 px-4 py-4"
          >
            <span className="text-2xl">{amenity.icon}</span>
            <span className="font-medium">{amenity.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default AmenitiesGrid;