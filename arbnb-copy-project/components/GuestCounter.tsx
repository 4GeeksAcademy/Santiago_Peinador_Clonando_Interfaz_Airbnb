/*
  GuestCounter muestra el contador de huéspedes.
  La lógica de aumentar y reducir sigue fuera del componente.
  Aquí solo pintamos los botones y mostramos el número actual.
*/
interface GuestCounterProps {
  guests: number;
  onDecreaseGuests: () => void;
  onIncreaseGuests: () => void;
}
const GuestCounter = ({
  guests,
  onDecreaseGuests,
  onIncreaseGuests,
}: GuestCounterProps) => {
  return (
    <div className="mt-4 rounded-2xl border border-gray-200 p-4">
      <p className="text-xs font-bold uppercase text-gray-500">Huéspedes</p>
      <div className="mt-3 flex items-center justify-between">
        <button
          type="button"
          onClick={onDecreaseGuests}
          disabled={guests === 1}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-xl disabled:opacity-40"
        >
          -
        </button>
        <span className="font-bold">
          {guests} {guests === 1 ? "huésped" : "huéspedes"}
        </span>
        <button
          type="button"
          onClick={onIncreaseGuests}
          disabled={guests === 6}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-xl disabled:opacity-40"
        >
          +
        </button>
      </div>
      <p className="mt-3 text-xs text-gray-500">Máximo 6 huéspedes.</p>
    </div>
  );
};
export default GuestCounter;