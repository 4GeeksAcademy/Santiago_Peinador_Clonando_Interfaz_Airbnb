import type { Property } from "@/types/property";
import BookingDateFields from "@/components/BookingDateFields";
import GuestCounter from "@/components/GuestCounter";
import BookingPriceSummary from "@/components/BookingPriceSummary";
/*
  BookingCard es la tarjeta principal de reserva.
  Ahora solo organiza subcomponentes:
  - BookingDateFields
  - GuestCounter
  - BookingPriceSummary
  Así evitamos que este archivo crezca demasiado.
*/
interface BookingCardProps {
  room: Property;
  guests: number;
  nights: number;
  totalPrice: number;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  minCheckOutDate: Date;
  onCheckInChange: (date: Date | null) => void;
  onCheckOutChange: (date: Date | null) => void;
  onDecreaseGuests: () => void;
  onIncreaseGuests: () => void;
}

const BookingCard = ({
  room,
  guests,
  nights,
  totalPrice,
  checkInDate,
  checkOutDate,
  minCheckOutDate,
  onCheckInChange,
  onCheckOutChange,
  onDecreaseGuests,
  onIncreaseGuests,
}: BookingCardProps) => {
  return (
    <aside className="hidden rounded-3xl border border-gray-200 p-6 shadow-xl md:sticky md:top-28 md:block md:h-fit">
      {/* Precio principal del alojamiento */}
      <div className="flex items-end justify-between">
        <p>
          <span className="text-2xl font-bold">{room.pricePerNight} €</span>{" "}
          <span className="text-gray-500">noche</span>
        </p>
        <p className="text-sm font-semibold">★ {room.rating}</p>
      </div>
      <BookingDateFields
        checkInDate={checkInDate}
        checkOutDate={checkOutDate}
        minCheckOutDate={minCheckOutDate}
        onCheckInChange={onCheckInChange}
        onCheckOutChange={onCheckOutChange}
      />
      <GuestCounter
        guests={guests}
        onDecreaseGuests={onDecreaseGuests}
        onIncreaseGuests={onIncreaseGuests}
      />
      <BookingPriceSummary
        pricePerNight={room.pricePerNight}
        nights={nights}
        totalPrice={totalPrice}
      />
      <button
        type="button"
        className="mt-6 w-full rounded-full bg-rose-500 py-4 font-bold text-white transition hover:bg-rose-600"
      >
        Reservar
      </button>
      <p className="mt-4 text-center text-sm text-gray-500">
        No se hará ningún cargo todavía.
      </p>
    </aside>
  );
};
export default BookingCard;