import Image from "next/image";
import Link from "next/link";
import type { Property } from "@/types/property";
/*
  PropertyCard muestra una tarjeta de alojamiento.
  Se reutiliza en:
  - Home
  - Catálogo

  Al hacer clic en la tarjeta, usamos Link de Next.js
  para navegar a la página de detalle sin recargar el navegador.
*/
interface PropertyCardProps {
  property: Property;
}
const PropertyCard = ({ property }: PropertyCardProps) => {
  // Tomamos la primera imagen del array como imagen principal de la card.
  const mainPhoto = property.photos[0];
  return (
    <Link href={`/rooms/${property.id}`} className="block">
      <article className="rounded-3xl bg-white pb-4">
        <div className="relative h-64 overflow-hidden rounded-3xl bg-gray-200">
          {/* Imagen optimizada por Next.js */}
          <Image
            src={mainPhoto}
            alt={property.title}
            fill
            loading="eager"
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover"
          />

          <button
            type="button"
            aria-label="Guardar alojamiento"
            className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-xl shadow"
          >
            ♡
          </button>
        </div>
        {/* Añadimos padding horizontal y vertical para que el texto no quede cortado */}
        <div className="px-1 pt-4">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="font-semibold text-gray-950">
                {property.title}
              </h2>

              <p className="text-sm text-gray-500">{property.location}</p>
            </div>

            <p className="shrink-0 text-sm font-medium text-gray-900">
              ★ {property.rating}
            </p>
          </div>

          <p className="mt-2 text-sm text-gray-700">
            <span className="font-semibold">{property.pricePerNight} €</span>{" "}
            noche
          </p>
        </div>
      </article>
    </Link>
  );
};
export default PropertyCard;