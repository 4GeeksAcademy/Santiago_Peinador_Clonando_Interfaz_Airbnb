/*
  LoadingState muestra un mensaje de carga reutilizable.
  Lo usaremos cuando la aplicación esté simulando la carga de datos,
  por ejemplo:
  - Cuando se cargan los alojamientos en la Home.
  - Cuando se cargan los detalles de una habitación.
  Recibe textos por props para poder reutilizarlo en diferentes páginas.
*/
interface LoadingStateProps {
  icon?: string;
  title: string;
  description?: string;
}
const LoadingState = ({
  icon = "🏡",
  title,
  description,
}: LoadingStateProps) => {
  return (
    <div className="flex h-64 items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-white">
      <div className="text-center">
        <p className="text-4xl">{icon}</p>

        <p className="mt-3 text-sm font-semibold text-gray-700">{title}</p>

        {description && (
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        )}
      </div>
    </div>
  );
};
export default LoadingState;