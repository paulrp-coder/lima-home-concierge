import {
  Brush,
  Building2,
  Droplets,
  Frame,
  Hammer,
  Layers3,
  PaintBucket,
  PanelsTopLeft,
  Sparkles,
  Wrench,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface ServiceCategory {
  id: string
  eyebrow: string
  title: string
  summary: string
  icon: LucideIcon
  image: string
  items: ServiceItem[]
}

export interface ServiceItem {
  title: string
  description: string
  icon: LucideIcon
}

export interface District {
  slug: string
  name: string
  descriptor: string
}

export const heroImage =
  "https://images.unsplash.com/photo-1724582586529-62622e50c0b3?auto=format&fit=crop&w=1800&q=88"

export const detailImage =
  "https://images.unsplash.com/photo-1602872029708-84d970d3382b?auto=format&fit=crop&w=1400&q=86"

export const buildingImage =
  "https://images.unsplash.com/photo-1669225487125-2d66e5c070e8?auto=format&fit=crop&w=1400&q=86"

export const districts: District[] = [
  {
    slug: "miraflores",
    name: "Miraflores",
    descriptor: "departamentos, casas y edificios frente al mar",
  },
  {
    slug: "san-isidro",
    name: "San Isidro",
    descriptor: "residencias, oficinas y edificios corporativos",
  },
  {
    slug: "surco",
    name: "Surco",
    descriptor: "casas, condominios y propiedades comerciales",
  },
  {
    slug: "san-borja",
    name: "San Borja",
    descriptor: "hogares, edificios residenciales y comercios",
  },
  {
    slug: "barranco",
    name: "Barranco",
    descriptor: "propiedades con carácter, viviendas y negocios",
  },
]

export const services: ServiceCategory[] = [
  {
    id: "acabados",
    eyebrow: "01 — Acabados",
    title: "Pintura y acabados arquitectónicos",
    summary: "Preparación meticulosa y terminaciones que elevan cada ambiente.",
    icon: PaintBucket,
    image:
      "https://images.unsplash.com/photo-1759722665660-c6ce8cd19ae3?q=80&w=754&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    items: [
      {
        title: "Pintura interior y exterior",
        description:
          "Preparación de muros, empastado, lijado y aplicación de pinturas premium para resultados uniformes y duraderos.",
        icon: Brush,
      },
      {
        title: "Acabados especiales",
        description:
          "Texturas de alta gama, estuco veneciano y microcemento ejecutados con precisión artesanal.",
        icon: Sparkles,
      },
      {
        title: "Sistemas drywall",
        description:
          "Diseño e instalación de cielos rasos, tabiquería y soluciones acústicas adaptadas al espacio.",
        icon: PanelsTopLeft,
      },
    ],
  },
  {
    id: "superficies",
    eyebrow: "02 — Superficies",
    title: "Restauración y tratamiento",
    summary:
      "Recuperamos materiales nobles y protegemos superficies de alto uso.",
    icon: Layers3,
    image:
      "https://images.unsplash.com/photo-1620691281018-962209eeba37?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    items: [
      {
        title: "Madera y carpintería",
        description:
          "Restauración, laqueado, barnizado y acabados DD o poliuretano para puertas principales, marcos y mobiliario.",
        icon: Frame,
      },
      {
        title: "Metal arquitectónico",
        description:
          "Mantenimiento anticorrosivo de rejas, ingresos vehiculares y estructuras metálicas.",
        icon: Hammer,
      },
      {
        title: "Pisos",
        description:
          "Pulido, vitrificado y cristalizado de parquet, loseta, terrazo y mármol.",
        icon: Sparkles,
      },
    ],
  },
  {
    id: "sanitaria",
    eyebrow: "03 — Equipamiento",
    title: "Red sanitaria y equipos de edificio",
    summary:
      "Intervenciones técnicas para sistemas esenciales de la propiedad.",
    icon: Droplets,
    image:
      "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    items: [
      {
        title: "Desatoro técnico",
        description:
          "Limpieza de tuberías con equipos eléctricos industriales para viviendas, fábricas y condominios.",
        icon: Wrench,
      },
      {
        title: "Cisternas y tanques",
        description:
          "Mantenimiento preventivo, lavado y desinfección certificada de cisternas y tanques elevados.",
        icon: Droplets,
      },
      {
        title: "Aparatos y presión",
        description:
          "Instalación y mantenimiento de grifería premium, inodoros suspendidos, lavatorios y sistemas de presión.",
        icon: Building2,
      },
    ],
  },
  {
    id: "coberturas",
    eyebrow: "04 — Arquitectura",
    title: "Cerramientos y techos",
    summary: "Soluciones que protegen, iluminan y completan la arquitectura.",
    icon: PanelsTopLeft,
    image:
      "https://images.unsplash.com/photo-1743012886338-6c6dbf6eb411?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    items: [
      {
        title: "Coberturas especializadas",
        description:
          "Diseño, instalación y mantenimiento estructural de policarbonato, coberturas termoacústicas y tragaluces.",
        icon: PanelsTopLeft,
      },
    ],
  },
]

export const whatsappHref = (district?: string): string => {
  const phone = "51945211955" // ← put your number here (no +, no spaces)

  const message = district
    ? `Hola, quisiera solicitar una cotización para un servicio en ${district}.`
    : "Hola, quisiera solicitar una cotización para un servicio."
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
