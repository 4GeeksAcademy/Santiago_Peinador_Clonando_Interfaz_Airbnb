/*
  BookingPriceSummary muestra el cálculo del precio.
  Si todavía no hay fechas seleccionadas, muestra un mensaje.
  Si hay fechas, muestra precio por noche, noches y total.
*/
interface BookingPriceSummaryProps {
  pricePerNight: number;
  nights: number;
  totalPrice: number;
}
const BookingPriceSummary = ({
  pricePerNight,
  nights,
  totalPrice,
}: BookingPriceSummaryProps) => {
  return (
    <div className="mt-5 rounded-2xl bg-gray-50 p-4">
      {nights > 0 ? (
        <>
          <div className="flex justify-between text-sm">
            <span>
              {pricePerNight} € x {nights}{" "}
              {nights === 1 ? "noche" : "noches"}
            </span>
            <span>{totalPrice} €</span>
          </div>
          <div className="mt-3 border-t border-gray-200 pt-3">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>{totalPrice} €</span>
            </div>
          </div>
        </>
      ) : (
        <p className="text-sm text-gray-500">
          Selecciona fecha de entrada y salida para calcular el total.
        </p>
      )}
    </div>
  );
};
export default BookingPriceSummary;