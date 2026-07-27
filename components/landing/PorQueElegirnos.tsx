import { Icon } from "@/components/ui/Icon";

const RAZONES = [
  {
    icon: "lucide:calendar-search",
    titulo: "Siempre hay disponibilidad",
    texto:
      "Coordinamos con varios grupos de mariachi de la zona, así que aunque tu fecha sea muy pedida, aseguramos música para tu evento.",
  },
  {
    icon: "lucide:banknote",
    titulo: "Precios accesibles y claros",
    texto:
      "Te decimos el precio desde el primer mensaje, sin sorpresas. Hay opciones para fin de semana y para entre semana.",
  },
  {
    icon: "lucide:watch",
    titulo: "Puntualidad garantizada",
    texto: "Sabemos que un mariachi que no llega arruina el evento. Confirmamos hora y lugar con anticipación.",
  },
  {
    icon: "lucide:music-4",
    titulo: "Repertorio y presentación",
    texto: "Grupos con años de experiencia, traje completo y el repertorio que tu evento necesita.",
  },
];

/** Los 4 argumentos que resuelven la objeción de "¿por qué contigo y no con otro?". */
export function PorQueElegirnos() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-14">
      <h2 className="text-center font-display text-3xl font-semibold sm:text-4xl">
        ¿Por qué contratar con nosotros?
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {RAZONES.map((r) => (
          <div key={r.titulo} className="card card-hover flex gap-4 p-6">
            <Icon name={r.icon} size={28} className="mt-1 shrink-0 text-marca" />
            <div>
              <h3 className="font-display text-lg font-semibold">{r.titulo}</h3>
              <p className="mt-1 text-sm text-ink-soft">{r.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
