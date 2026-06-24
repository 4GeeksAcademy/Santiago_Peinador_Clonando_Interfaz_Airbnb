import Link from "next/link";
/*
  NotFoundState muestra un mensaje cuando no encontramos datos.
  Lo podemos reutilizar en varias partes:
  - Cuando una búsqueda no devuelve alojamientos.
  - Cuando una habitación no existe.
  - Cuando una lista está vacía.
  Puede mostrar un enlace opcional si queremos mandar al usuario
  a otra página, por ejemplo volver al inicio o al catálogo.
*/
interface NotFoundStateProps {
  icon?: string;
  title: string;
  description?: string;
  linkHref?: string;
  linkLabel?: string;
}
const NotFoundState = ({
  icon = "😕",
  title,
  description,
  linkHref,
  linkLabel,
}: NotFoundStateProps) => {
  return (
    <div className="flex h-64 items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-white px-6">
      <div className="text-center">
        <p className="text-4xl">{icon}</p>
        <h2 className="mt-3 text-lg font-bold text-gray-950">{title}</h2>
        {description && (
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        )}
        {linkHref && linkLabel && (
          <Link
            href={linkHref}
            className="mt-5 inline-flex rounded-full bg-rose-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-600"
          >
            {linkLabel}
          </Link>
        )}
      </div>
    </div>
  );
};
export default NotFoundState;