const FOTOS = [
  { src: "/productos/mariachi-1.jpg", alt: "Mariachi tocando en un evento" },
  { src: "/productos/mariachi-2.jpg", alt: "Mariachi en una celebración" },
  { src: "/productos/mariachi-serenata-trio.jpg", alt: "Trío de mariachi en serenata" },
  { src: "/productos/mariachi-3.jpg", alt: "Mariachi con traje completo" },
  { src: "/productos/mariachi-homenaje.jpg", alt: "Mariachi en un homenaje" },
];

/** Fotos reales de eventos: la prueba de que el servicio existe y se ve bien. */
export function Galeria() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-14">
      <h2 className="text-center font-display text-3xl font-semibold sm:text-4xl">
        Así se ve en un evento real
      </h2>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {FOTOS.map((f, i) => (
          <div
            key={f.src}
            className={`card overflow-hidden p-0 ${i === 0 ? "col-span-2 row-span-2 sm:col-span-2 sm:row-span-2" : ""}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={f.src} alt={f.alt} className="h-full w-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
