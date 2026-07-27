import { Hero } from "@/components/landing/Hero";
import { ConfianzaBar } from "@/components/landing/ConfianzaBar";
import { TiposEventos } from "@/components/landing/TiposEventos";
import { PorQueElegirnos } from "@/components/landing/PorQueElegirnos";
import { Galeria } from "@/components/landing/Galeria";
import { CTAFinal } from "@/components/landing/CTAFinal";
import { LandingPie } from "@/components/landing/LandingPie";

/** Landing genérica: puerta de entrada del servicio, sin nombre de un grupo en particular. */
export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ConfianzaBar />
      <TiposEventos />
      <PorQueElegirnos />
      <Galeria />
      <CTAFinal />
      <LandingPie />
    </main>
  );
}
