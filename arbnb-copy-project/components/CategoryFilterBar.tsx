/*
  CategoryFilterBar muestra la fila horizontal de categorías.
  Recibe:
  - categories: la lista de categorías disponibles.
  - activeCategory: la categoría seleccionada actualmente.
  - onCategoryChange: función para cambiar la categoría activa.
  El estado sigue viviendo en app/page.tsx.
  Este componente solo pinta los botones y avisa cuando el usuario hace clic.
*/
interface Category {
  name: string;
  icon: string;
}
interface CategoryFilterBarProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}
const CategoryFilterBar = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterBarProps) => {
  return (
    <section className="border-b border-gray-100 bg-white px-4">
      <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto py-4">
        {/* Botón para quitar filtros y mostrar todas las propiedades */}
        <button
          type="button"
          onClick={() => onCategoryChange("Todas")}
          className={`shrink-0 border-b-2 pb-2 text-sm ${
            activeCategory === "Todas"
              ? "border-gray-950 text-gray-950"
              : "border-transparent text-gray-500"
          }`}
        >
          <div className="text-2xl">✨</div>
          <span>Todas</span>
        </button>
        {/* Recorremos el array de categorías para crear un botón por cada una */}
        {categories.map((category) => (
          <button
            type="button"
            key={category.name}
            onClick={() => onCategoryChange(category.name)}
            className={`shrink-0 border-b-2 pb-2 text-sm ${
              activeCategory === category.name
                ? "border-gray-950 text-gray-950"
                : "border-transparent text-gray-500"
            }`}
          >
            <div className="text-2xl">{category.icon}</div>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
};
export default CategoryFilterBar;