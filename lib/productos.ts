import type { Producto } from "./tipos";

/**
 * ================================================================
 *  TUS PRODUCTOS O SERVICIOS.
 *  Cada ficha sigue la "anatomía del que vende" (ver CLAUDE.md):
 *   paraQuien  → el trabajo que resuelve (Christensen, HBR 2005)
 *   beneficio  → resultado, no característica (StoryBrand)
 *   caracteristicas → SOLO 3 que importan (Iyengar, las mermeladas)
 *   precioAntes → ancla (Ariely) · facilidades → quita el miedo al gasto
 *   bono       → la oferta apilada (Hormozi)
 *   escasez    → honesta, por tiempo o unidades (Cialdini)
 *   prueba     → prueba social (Cialdini)
 *  Borra los de ejemplo y pon los tuyos. Deja máximo 3-6 por categoría.
 * ================================================================
 */
export const PRODUCTOS: Producto[] = [
  {
    slug: "gran-celebracion-fin-de-semana",
    nombre: "Paquete Gran Celebración (Fin de Semana)",
    categoria: "Bodas, XV años y Fiestas",
    imagen: "/productos/mariachi-1.jpg",
    paraQuien:
      "Para quien celebra su boda, XV años, bautizo o gran fiesta en viernes, sábado o domingo y quiere mariachi completo sin preocuparse por el sonido.",
    beneficio:
      "Una hora de mariachi completo con audio profesional incluido, para que se escuche perfecto en tu salón o jardín.",
    caracteristicas: [
      "6 músicos profesionales con traje de gala",
      "1 hora continua de servicio",
      "Equipo de audio profesional incluido",
    ],
    precio: "$3,800 MXN",
    precioAntes: "$4,000 MXN",
    bono:
      "Equipo de audio profesional sin costo extra, para máxima fidelidad de voces e instrumentos en eventos grandes.",
    escasez: { tipo: "tiempo", valor: "precio de oportunidad agendando hoy" },
    destacado: true,
  },
  {
    slug: "reunion-familiar-premium",
    nombre: "Reunión Familiar o Corporativa — Premium (6 elementos)",
    categoria: "Reuniones y Eventos",
    imagen: "/productos/mariachi-2.jpg",
    paraQuien:
      "Para cumpleaños, comidas de trabajo o aniversarios entre semana (lunes a jueves), en casa o espacios medianos, con la fuerza completa del mariachi.",
    beneficio:
      "Una hora de mariachi con 6 elementos que llena tu reunión de ambiente, entre semana y a mejor precio.",
    caracteristicas: [
      "6 músicos profesionales",
      "1 hora de servicio",
      "Ideal de lunes a jueves",
    ],
    precio: "$3,500 MXN",
    precioAntes: "$3,700 MXN",
    escasez: { tipo: "tiempo", valor: "precio de oportunidad agendando hoy" },
  },
  {
    slug: "reunion-familiar-estandar",
    nombre: "Reunión Familiar o Corporativa — Estándar (5 elementos)",
    categoria: "Reuniones y Eventos",
    imagen: "/productos/mariachi-3.jpg",
    paraQuien:
      "Para quien quiere mariachi en su cumpleaños, comida de trabajo o aniversario entre semana, con una opción más accesible.",
    beneficio:
      "Una hora de mariachi con 5 elementos, la opción justa para reuniones medianas entre semana.",
    caracteristicas: [
      "5 músicos profesionales",
      "1 hora de servicio",
      "Ideal de lunes a jueves",
    ],
    precio: "$3,300 MXN",
    precioAntes: "$3,500 MXN",
    escasez: { tipo: "tiempo", valor: "precio de oportunidad agendando hoy" },
  },
  {
    slug: "serenata-completa",
    nombre: "Serenata Inolvidable — Completa (6 elementos)",
    categoria: "Serenatas",
    imagen: "/productos/mariachi-1.jpg",
    paraQuien:
      "Para propuestas de matrimonio, aniversarios o sorpresas que quieres que suenen con toda la fuerza tradicional del mariachi.",
    beneficio:
      "7 canciones con mariachi completo, para que ese momento se sienta inolvidable.",
    caracteristicas: ["6 músicos profesionales", "7 canciones", "Máxima fuerza tradicional"],
    precio: "$2,600 MXN",
    precioAntes: "$2,800 MXN",
    escasez: { tipo: "tiempo", valor: "precio de oportunidad agendando hoy" },
  },
  {
    slug: "serenata-trio",
    nombre: "Serenata Inolvidable — Íntima en Trío (3 elementos)",
    categoria: "Serenatas",
    paraQuien:
      "Para quien busca una serenata más íntima y acústica, igual de emotiva, para una sorpresa cercana.",
    beneficio: "7 canciones en un formato acústico e íntimo, directo al corazón.",
    caracteristicas: ["3 músicos profesionales", "7 canciones", "Formato acústico e íntimo"],
    precio: "$1,700 MXN",
    precioAntes: "$1,900 MXN",
    escasez: { tipo: "tiempo", valor: "precio de oportunidad agendando hoy" },
  },
  {
    slug: "homenaje-despedida",
    nombre: "Paquete Homenaje y Despedida",
    categoria: "Homenajes y Funerales",
    paraQuien:
      "Para acompañar con música a la familia que despide a un ser querido, con el respeto que merece ese momento.",
    beneficio:
      "Un acompañamiento musical solemne y digno, con repertorio tradicional de despedida, con un costo de apoyo solidario por respeto a la familia.",
    caracteristicas: [
      "5 músicos profesionales",
      "Repertorio tradicional y solemne",
      "Servicio en el sepelio",
    ],
    precio: "$3,300 MXN",
    precioAntes: "$3,500 MXN",
  },
];

/** Productos de una categoría, con el destacado primero. */
export function productosPorCategoria(categoria: string): Producto[] {
  return PRODUCTOS.filter((p) => p.categoria === categoria).sort(
    (a, b) => Number(b.destacado ?? false) - Number(a.destacado ?? false)
  );
}

/** Busca un producto por su slug (para la ficha individual). */
export function productoPorSlug(slug: string): Producto | undefined {
  return PRODUCTOS.find((p) => p.slug === slug);
}
