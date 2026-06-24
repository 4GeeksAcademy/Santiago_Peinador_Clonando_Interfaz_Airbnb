/*
  SortControl muestra el selector para ordenar alojamientos por precio.
  Recibe:
  - sortOrder: el orden actual, puede ser "asc" o "desc".
  - onSortChange: función que avisa a la página cuando el usuario cambia el orden.
  El estado sigue viviendo en app/catalog/page.tsx.
  Este componente solo pinta el selector.
*/
export type SortOrder = "asc" | "desc";
interface SortControlProps {
  sortOrder: SortOrder;
  onSortChange: (value: SortOrder) => void;
}
const SortControl = ({ sortOrder, onSortChange }: SortControlProps) => {
  return (
    <label className="flex items-center justify-between gap-3 rounded-2xl border border-gray-200 px-4 py-3 text-sm shadow-sm md:w-72">
      <span className="font-medium text-gray-700">Ordenar por precio</span>

      <select
        value={sortOrder}
        onChange={(event) => onSortChange(event.target.value as SortOrder)}
        className="bg-transparent font-semibold text-gray-950 outline-none"
      >
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
    </label>
  );
};
export default SortControl;