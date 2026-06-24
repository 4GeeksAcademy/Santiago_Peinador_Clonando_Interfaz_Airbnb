import DatePicker from "react-datepicker";
/*
  BookingDateFields muestra los campos de fecha de entrada y salida.
  Este componente no guarda estado propio.
  Recibe las fechas y las funciones desde la página de detalle.
*/
interface BookingDateFieldsProps {
  checkInDate: Date | null;
  checkOutDate: Date | null;
  minCheckOutDate: Date;
  onCheckInChange: (date: Date | null) => void;
  onCheckOutChange: (date: Date | null) => void;
}
const BookingDateFields = ({
  checkInDate,
  checkOutDate,
  minCheckOutDate,
  onCheckInChange,
  onCheckOutChange,
}: BookingDateFieldsProps) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1">
      {/* Fecha de entrada */}
      <div className="rounded-2xl border border-gray-200 p-4">
        <p className="mb-2 text-xs font-bold uppercase text-gray-500">
          Entrada
        </p>
        <DatePicker
          selected={checkInDate}
          onChange={onCheckInChange}
          selectsStart
          startDate={checkInDate}
          endDate={checkOutDate}
          minDate={new Date()}
          placeholderText="Elige fecha"
          dateFormat="dd/MM/yyyy"
          className="w-full bg-transparent text-sm font-semibold outline-none"
        />
      </div>
      {/* Fecha de salida */}
      <div className="rounded-2xl border border-gray-200 p-4">
        <p className="mb-2 text-xs font-bold uppercase text-gray-500">
          Salida
        </p>
        <DatePicker
          selected={checkOutDate}
          onChange={onCheckOutChange}
          selectsEnd
          startDate={checkInDate}
          endDate={checkOutDate}
          minDate={minCheckOutDate}
          placeholderText="Elige fecha"
          dateFormat="dd/MM/yyyy"
          className="w-full bg-transparent text-sm font-semibold outline-none"
        />
      </div>
    </div>
  );
};
export default BookingDateFields;