/*
  RoomInfoHeader muestra la información principal del alojamiento.
  Contiene:
  - Título del alojamiento.
  - Valoración con estrella.
  - Número de reseñas.
  - Ubicación.
  Este componente no tiene estado propio.
  Solo recibe datos por props y los muestra en pantalla.
*/
interface RoomInfoHeaderProps {
  title: string;
  rating: number;
  reviewCount: number;
  location: string;
}
const RoomInfoHeader = ({
  title,
  rating,
  reviewCount,
  location,
}: RoomInfoHeaderProps) => {
  return (
    <header>
      {/* Título principal del alojamiento */}
      <h1 className="text-2xl font-bold md:text-3xl">{title}</h1>
      {/* Fila de datos importantes: valoración, reseñas y ubicación */}
      <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-700">
        <span className="font-semibold">★ {rating}</span>
        <span>·</span>
        <span>{reviewCount} reseñas</span>
        <span>·</span>
        <span>{location}</span>
      </div>
    </header>
  );
};
export default RoomInfoHeader;