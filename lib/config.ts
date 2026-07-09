import type { Config } from "./tipos";

// Configuración generada con el wizard (/configurar).
export const CONFIG: Config = {
  marca: {
    negocio: "MARIACHI DE NEXTLALPAN ",
    descripcion: "Servicio de música de mariachi, para celebraciones familiares y sociales (Bodas, XV años, cumpleaños y aniversarios, serenatas románticas, funerales, eventos de despedida y homenajes, fiestas de fin de año, aniversarios corporativos, y más) · Nos ubicamos en Nextlalpan, Estado de México.",
    logo: undefined, // pon "/logo.png" cuando subas tu logo a la carpeta public
    primario: "#0f766e",
    secundario: "#c98a2b",
    fondo: "claro",
    whatsappPrincipal: "525538384518",
    ciudad: "Nextlalpan",
    enlace: "https://www.facebook.com/share/1BUx3UhmDQ/",
    nota: "Los precios pueden variar según la zona o distancia del evento.",
  },
  vendedores: [
    { slug: "tienda", nombre: "MARIACHI DE NEXTLALPAN ", whatsapp: "525538384518" },
  ],
  categorias: ["Bodas, XV años y Fiestas", "Reuniones y Eventos", "Serenatas", "Homenajes y Funerales"],
  mensajePlantilla:
    "{saludo}vi tu catálogo y me interesa {producto}. Mi evento es el día [fecha] en [lugar], ¿me confirman la disponibilidad?",
};
