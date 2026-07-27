import type { Metadata } from "next";
import { MarcaHeader } from "@/components/catalogo/MarcaHeader";
import { BarraAcciones } from "@/components/catalogo/BarraAcciones";
import { CatalogoGrid } from "@/components/catalogo/CatalogoGrid";
import { Pie } from "@/components/catalogo/Pie";
import { CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: `${CONFIG.marca.negocio} · Catálogo`,
  description: CONFIG.marca.descripcion,
  openGraph: {
    title: `${CONFIG.marca.negocio} · Catálogo`,
    description: CONFIG.marca.descripcion,
    type: "website",
    images: [{ url: "/productos/mariachi-1.jpg", width: 1024, height: 1024, alt: CONFIG.marca.negocio }],
  },
};

/**
 * El catálogo vivo. Si la liga trae ?v=<vendedor>, todos los botones
 * "Lo quiero" abren el WhatsApp de ese vendedor.
 */
export default async function Paquetes({
  searchParams,
}: {
  searchParams: Promise<{ v?: string }>;
}) {
  const { v } = await searchParams;
  return (
    <main className="min-h-screen">
      <MarcaHeader />
      <BarraAcciones />
      <CatalogoGrid vendedorSlug={v ?? null} />
      <Pie />
    </main>
  );
}
