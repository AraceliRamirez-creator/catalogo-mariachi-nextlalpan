import { Icon } from "@/components/ui/Icon";

const EVENTOS = [
  { icon: "lucide:heart", texto: "Bodas" },
  { icon: "lucide:sparkles", texto: "XV años" },
  { icon: "lucide:party-popper", texto: "Cumpleaños y aniversarios" },
  { icon: "lucide:graduation-cap", texto: "Eventos escolares" },
  { icon: "lucide:landmark", texto: "Eventos de gobierno municipal" },
  { icon: "lucide:moon-star", texto: "Serenatas" },
  { icon: "lucide:flower-2", texto: "Funerales y homenajes" },
];

/** Grid de tipos de evento: que cualquier visitante se vea reflejado rápido. */
export function TiposEventos() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-14">
      <h2 className="text-center font-display text-3xl font-semibold sm:text-4xl">
        Para cada tipo de evento
      </h2>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {EVENTOS.map((e) => (
          <div key={e.texto} className="card flex flex-col items-center gap-2 px-4 py-6 text-center">
            <Icon name={e.icon} size={26} className="text-marca" />
            <span className="text-sm font-medium text-ink">{e.texto}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
