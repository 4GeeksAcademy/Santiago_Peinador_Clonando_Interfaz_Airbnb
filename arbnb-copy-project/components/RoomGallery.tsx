import Image from "next/image";
import Link from "next/link";
/*
  RoomGallery muestra la galería superior de la página de detalle.
  - currentPhotoIndex: índice de la imagen visible.  - onPrevious: función para ir a la imagen anterior.   - onNext: función para ir a la imagen siguiente.
*/
interface RoomGalleryProps {
  photos: string[];
  currentPhotoIndex: number;
  onPrevious: () => void;
  onNext: () => void;
}
const RoomGallery = ({
  photos,
  currentPhotoIndex,
  onPrevious,
  onNext,
}: RoomGalleryProps) => {
  const currentPhoto = photos[currentPhotoIndex];
  return (
    <section className="relative">
      <div className="relative h-[360px] overflow-hidden bg-gray-200 md:h-[480px]">
        <Image
          src={currentPhoto}
          alt="Foto del alojamiento"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute left-4 top-4">
        <Link
          href="/catalog"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow"
          aria-label="Volver al catálogo"
        >
          ←
        </Link>
      </div>
      <div className="absolute right-4 top-4 flex items-center gap-3">
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow"
          aria-label="Compartir alojamiento"
        >
          ⤴
        </button>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl shadow"
          aria-label="Guardar alojamiento"
        >
          ♡
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex items-center justify-between px-4">
        <button
          type="button"
          onClick={onPrevious}
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold shadow"
        >
          Anterior
        </button>
        <span className="rounded-full bg-black/70 px-3 py-1 text-sm font-semibold text-white">
          {currentPhotoIndex + 1} / {photos.length}
        </span>
        <button
          type="button"
          onClick={onNext}
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold shadow"
        >
          Siguiente
        </button>
      </div>
    </section>
  );
};
export default RoomGallery;