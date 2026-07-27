import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { linkWhatsAppLanding } from "@/lib/landing";

/** Encabezado de la landing: promesa principal + los dos caminos (WhatsApp directo o ver paquetes). */
export function Hero() {
  return (
    <header className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 pt-14 pb-10 text-center sm:pt-20">
      <span className="chip">
        <span className="anim-pulse-glow inline-block h-2 w-2 rounded-full" style={{ background: "var(--marca)" }} />
        Disponibilidad garantizada para tu fecha
      </span>

      <h1 className="font-display text-4xl font-semibold leading-tight sm:text-6xl">
        Mariachi para tu evento,{" "}
        <span className="text-gradient-marca">sin quedarte sin música</span>
      </h1>

      <p className="max-w-2xl text-lg text-ink-soft">
        Coordinamos mariachis profesionales para bodas, XV años, eventos escolares, eventos
        de gobierno, serenatas y homenajes en Nextlalpan, Zumpango, Jaltenco y Tonanitla.
        Más de 10 años conectando familias con el grupo ideal para su fecha.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <a href={linkWhatsAppLanding} target="_blank" rel="noopener noreferrer" className="btn-marca btn-wa">
          <Icon name="ic:baseline-whatsapp" size={20} />
          Cotizar por WhatsApp
        </a>
        <Link href="/paquetes" className="btn-ghost">
          <Icon name="lucide:list" size={18} />
          Ver paquetes y precios
        </Link>
      </div>
    </header>
  );
}
