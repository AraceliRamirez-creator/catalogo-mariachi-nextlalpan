import { CONFIG } from "@/lib/config";

/** Pie de la landing: sin nombre de marca, solo zona y contacto. */
export function LandingPie() {
  return (
    <footer className="border-t border-line py-10 text-center text-sm text-ink-mute">
      <p className="font-medium text-ink-soft">Mariachi para tu evento</p>
      {CONFIG.marca.ciudad && <p className="mt-1">{CONFIG.marca.ciudad} y municipios vecinos</p>}
    </footer>
  );
}
