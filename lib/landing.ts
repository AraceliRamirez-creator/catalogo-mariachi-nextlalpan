import { CONFIG } from "./config";
import { linkWhatsApp } from "./whatsapp";

/** Mensaje genérico de WhatsApp para la landing (no atado a un grupo en particular). */
const MENSAJE_LANDING =
  "Hola, quiero cotizar un mariachi para mi evento. Fecha: [fecha], Lugar: [lugar]. ¿Me confirman disponibilidad?";

/** Liga de WhatsApp para los botones de la landing. */
export const linkWhatsAppLanding = linkWhatsApp(CONFIG.marca.whatsappPrincipal, MENSAJE_LANDING);
