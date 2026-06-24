/*
  MobileBookingBar es la barra fija inferior para móvil.
  Se muestra solo en pantallas pequeñas.
  Resume la reserva mostrando:
  - precio por noche o precio total
  - huéspedes o noches seleccionadas
  - botones para aumentar/reducir huéspedes
  - botón principal de reservar
*/
interface MobileBookingBarProps {
  pricePerNight: number;
  guests: number;
  nights: number;
  totalPrice: number;
  onDecreaseGuests: () => void;
  onIncreaseGuests: () => void;
}
const MobileBookingBar = ({
  pricePerNight,
  guests,
  nights,
  totalPrice,
  onDecreaseGuests,
  onIncreaseGuests,
}: MobileBookingBarProps) => {
  // Si el usuario ya seleccionó fechas, mostramos el total.
  // Si no, mostramos el precio por noche.
  const hasSelectedDates = nights > 0;
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-30 border-t border-gray-200 bg-white px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="font-bold text-gray-950">
            {hasSelectedDates
              ? `${totalPrice} € total`
              : `${pricePerNight} € noche`}
          </p>
          <p className="text-sm text-gray-500">
            {hasSelectedDates
              ? `${nights} ${nights === 1 ? "noche" : "noches"}`
              : `${guests} ${guests === 1 ? "huésped" : "huéspedes"}`}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onDecreaseGuests}
            disabled={guests === 1}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-lg disabled:opacity-40"
          >
            -
          </button>
          <button
            type="button"
            onClick={onIncreaseGuests}
            disabled={guests === 6}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 text-lg disabled:opacity-40"
          >
            +
          </button>
          <button
            type="button"
            className="rounded-full bg-rose-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-rose-600"
          >
            Reservar
          </button>
        </div>
      </div>
    </footer>
  );
};
export default MobileBookingBar;