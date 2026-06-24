/*
  HostInfo muestra la información básica del anfitrión.
  Contiene:
  - Un avatar falso con un icono de usuario.
  - El nombre del anfitrión.
  - Los años que lleva como anfitrión.
  Este componente no tiene lógica.
  Solo recibe datos por props y los muestra.
*/
interface HostInfoProps {
  hostName: string;
  hostYears: number;
}
const HostInfo = ({ hostName, hostYears }: HostInfoProps) => {
  return (
    <section className="mt-6 border-t border-gray-200 pt-6">
      <div className="flex items-center gap-4">
        {/* Avatar placeholder. Más adelante podría ser una imagen real */}
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-200 text-2xl">
          👤
        </div>

        <div>
          <h2 className="font-bold">Anfitrión: {hostName}</h2>

          <p className="text-sm text-gray-500">
            {hostYears} años como anfitrión
          </p>
        </div>
      </div>
    </section>
  );
};
export default HostInfo;