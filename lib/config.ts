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
    nota:
      "En Mariachi de Nextlalpan nos encanta ser transparentes contigo. El precio final de tu paquete puede ajustarse ligeramente por dos razones:\n\n📍 La ubicación: Si tu evento es fuera de nuestra zona local, contemplamos un pequeño extra por el tiempo y traslado de los músicos para asegurar que lleguemos súper puntuales.\n📅 La fecha: En días festivos de muy alta demanda (como Día de las Madres, fiestas patrias o Navidad), los costos de temporada pueden variar un poco.\n\n¡Escríbenos la fecha, hora y lugar de tu fiesta para congelar tu precio hoy mismo! 🥳",
  },
  vendedores: [
    { slug: "tienda", nombre: "MARIACHI DE NEXTLALPAN ", whatsapp: "525538384518" },
  ],
  categorias: ["Bodas, XV años y Fiestas", "Reuniones y Eventos", "Serenatas", "Homenajes y Funerales"],
  mensajePlantilla:
    "{saludo}vi tu catálogo y me interesa {producto}. Mi evento es el día [fecha] en [lugar], ¿me confirman la disponibilidad?",
};
