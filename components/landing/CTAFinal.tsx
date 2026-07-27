import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { linkWhatsAppLanding } from "@/lib/landing";

/** Último empujón antes de irse: repetir la promesa y dar los dos caminos de nuevo. */
export function CTAFinal() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-14 text-center">
      <div className="card px-8 py-12">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">
          Cuéntanos tu fecha y te confirmamos disponibilidad
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-ink-soft">
          Escríbenos por WhatsApp con la fecha, hora y lugar de tu evento, o revisa primero
          nuestros paquetes y precios.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href={linkWhatsAppLanding} target="_blank" rel="noopener noreferrer" className="btn-marca btn-wa">
            <Icon name="ic:baseline-whatsapp" size={20} />
            Cotizar por WhatsApp
          </a>
          <Link href="/paquetes" className="btn-ghost">
            <Icon name="lucide:list" size={18} />
            Ver paquetes y precios
          </Link>
        </div>
      </div>
    </section>
  );
}
