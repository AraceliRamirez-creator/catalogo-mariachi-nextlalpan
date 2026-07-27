import { Icon } from "@/components/ui/Icon";

const DATOS = [
  { icon: "lucide:calendar-check", texto: "10+ años en la región" },
  { icon: "lucide:map-pin", texto: "Nextlalpan, Zumpango, Jaltenco y Tonanitla" },
  { icon: "lucide:users", texto: "Grupos de 5 y 6 integrantes" },
  { icon: "lucide:shield-check", texto: "Puntualidad asegurada" },
];

/** Barra corta de confianza: los datos duros que quitan la duda antes de leer el resto. */
export function ConfianzaBar() {
  return (
    <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-3 border-y border-line px-5 py-6 text-sm text-ink-soft">
      {DATOS.map((d) => (
        <span key={d.texto} className="inline-flex items-center gap-2">
          <Icon name={d.icon} size={17} className="text-marca" />
          {d.texto}
        </span>
      ))}
    </div>
  );
}
