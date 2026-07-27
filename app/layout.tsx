import type { Metadata } from "next";
import "./globals.css";
import { CONFIG } from "@/lib/config";
import { estiloMarca, claseTema } from "@/lib/marca";

const TITULO_GENERICO = "Mariachi para tu Evento · Nextlalpan y municipios vecinos";
const DESCRIPCION_GENERICA =
  "Servicio de mariachi para bodas, XV años, eventos escolares, eventos de gobierno, serenatas y homenajes en Nextlalpan, Zumpango, Jaltenco y Tonanitla. Disponibilidad garantizada.";

export const metadata: Metadata = {
  metadataBase: new URL("https://catalogo-vivo-gilt.vercel.app"),
  title: TITULO_GENERICO,
  description: DESCRIPCION_GENERICA,
  openGraph: {
    title: TITULO_GENERICO,
    description: DESCRIPCION_GENERICA,
    type: "website",
    images: [{ url: "/productos/mariachi-1.jpg", width: 1024, height: 1024, alt: "Mariachi en un evento" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" style={estiloMarca(CONFIG.marca)} className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${claseTema(CONFIG.marca)} min-h-full`}>
        <div className="bg-marca" />
        {children}
      </body>
    </html>
  );
}
