import { activeClient } from "./client";

export type HeroBenefitIcon = "shieldCheck" | "truck" | "sparkles";

export type AboutUsIcon = "factory" | "badgeCheck" | "users";

export type HeroStatContent = {
  value: string;
  label: string;
};

export type HeroBenefitContent = {
  title: string;
  description: string;
  icon: HeroBenefitIcon;
};

export type HeroSectionContent = {
  badge: string;
  title: string;
  description: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  benefitsTitle: string;
  stats: HeroStatContent[];
  benefits: HeroBenefitContent[];
};

export type AboutUsItemContent = {
  title: string;
  description: string;
  icon: AboutUsIcon;
};

export type AboutUsSectionContent = {
  badge: string;
  title: string;
  items: AboutUsItemContent[];
};

export type FeaturedProductsSectionContent = {
  badge: string;
  title: string;
  description: string;
  viewAllLabel: string;
};

export type HomeSectionsContent = {
  hero: HeroSectionContent;
  aboutUs: AboutUsSectionContent;
  featuredProducts: FeaturedProductsSectionContent;
};

const defaultHomeContent: HomeSectionsContent = {
  hero: {
    badge: "Catalogo industrial premium",
    title: "Equipamos tu operacion con seguridad y confianza",
    description:
      "En {clientName} combinamos productos certificados, asesoria tecnica y respuesta rapida para que tu equipo trabaje protegido.",
    primaryCtaLabel: "Ver catalogo",
    secondaryCtaLabel: "Contactar asesor",
    benefitsTitle: "Por que elegirnos",
    stats: [
      {
        value: "+500",
        label: "Productos activos",
      },
      {
        value: "24/7",
        label: "Atencion comercial",
      },
      {
        value: "98%",
        label: "Clientes recurrentes",
      },
    ],
    benefits: [
      {
        title: "Calidad certificada",
        description: "Seleccion de marcas con cumplimiento normativo.",
        icon: "shieldCheck",
      },
      {
        title: "Entrega agil",
        description: "Stock preparado para despachos en tiempos cortos.",
        icon: "truck",
      },
      {
        title: "Asesoria experta",
        description: "Te ayudamos a elegir la mejor solucion por rubro.",
        icon: "sparkles",
      },
    ],
  },
  aboutUs: {
    badge: "Nosotros",
    title: "Comprometidos con la seguridad industrial",
    items: [
      {
        title: "Especialistas industriales",
        description:
          "Acompanamos operaciones de manufactura, logistica y construccion con soluciones de seguridad confiables.",
        icon: "factory",
      },
      {
        title: "Normativas al dia",
        description:
          "Nuestros productos y recomendaciones se alinean con estandares vigentes para reducir riesgos en campo.",
        icon: "badgeCheck",
      },
      {
        title: "Atencion cercana",
        description:
          "Desde la seleccion hasta la postventa, brindamos acompanamiento tecnico para cada equipo de trabajo.",
        icon: "users",
      },
    ],
  },
  featuredProducts: {
    badge: "Seleccion curada",
    title: "Productos destacados",
    description: "Explora algunas soluciones recomendadas para tu operacion.",
    viewAllLabel: "Ver todo el catalogo",
  },
};

const homeContentByClient: Record<string, HomeSectionsContent> = {
  default: defaultHomeContent,
  nordic: {
    hero: {
      badge: "Soluciones tecnicas para terreno exigente",
      title: "Proteccion industrial con enfoque nordico",
      description:
        "En {clientName} priorizamos materiales resistentes, diseno funcional y soporte tecnico para equipos de alto rendimiento.",
      primaryCtaLabel: "Explorar productos",
      secondaryCtaLabel: "Hablar con un especialista",
      benefitsTitle: "Por que confian en nosotros",
      stats: [
        {
          value: "+350",
          label: "Referencias tecnicas",
        },
        {
          value: "48 h",
          label: "Despachos programados",
        },
        {
          value: "95%",
          label: "Reposicion en stock",
        },
      ],
      benefits: [
        {
          title: "Durabilidad real",
          description: "Productos seleccionados para uso continuo en ambientes demandantes.",
          icon: "shieldCheck",
        },
        {
          title: "Logistica ordenada",
          description: "Coordinamos entregas por etapas para sostener tu operacion.",
          icon: "truck",
        },
        {
          title: "Acompanamiento tecnico",
          description: "Recomendaciones claras segun actividad, riesgo y normativa.",
          icon: "sparkles",
        },
      ],
    },
    aboutUs: {
      badge: "Equipo",
      title: "Cultura de prevencion y mejora continua",
      items: [
        {
          title: "Operacion especializada",
          description: "Trabajamos con industrias que necesitan consistencia y trazabilidad.",
          icon: "factory",
        },
        {
          title: "Criterio normativo",
          description: "Evaluamos cada recomendacion con foco en cumplimiento y seguridad.",
          icon: "badgeCheck",
        },
        {
          title: "Soporte cercano",
          description: "Respondemos rapido para que tus equipos no detengan su actividad.",
          icon: "users",
        },
      ],
    },
    featuredProducts: {
      badge: "Top seleccion",
      title: "Recomendados para alto desempeno",
      description: "Productos elegidos por su equilibrio entre proteccion, confort y vida util.",
      viewAllLabel: "Ver coleccion completa",
    },
  },
  industrial: {
    hero: {
      badge: "Proteccion certificada para tu planta",
      title: "Seguridad industrial para operaciones criticas",
      description:
        "En {clientName} integramos equipamiento confiable, stock inmediato y asistencia comercial para reducir riesgos operativos.",
      primaryCtaLabel: "Ver lineas de seguridad",
      secondaryCtaLabel: "Solicitar cotizacion",
      benefitsTitle: "Ventajas para tu operacion",
      stats: [
        {
          value: "+500",
          label: "Productos activos",
        },
        {
          value: "24/7",
          label: "Atencion comercial",
        },
        {
          value: "98%",
          label: "Clientes recurrentes",
        },
      ],
      benefits: [
        {
          title: "Calidad certificada",
          description: "Seleccion de marcas con cumplimiento normativo.",
          icon: "shieldCheck",
        },
        {
          title: "Entrega agil",
          description: "Stock preparado para despachos en tiempos cortos.",
          icon: "truck",
        },
        {
          title: "Asesoria experta",
          description: "Te ayudamos a elegir la mejor solucion por rubro.",
          icon: "sparkles",
        },
      ],
    },
    aboutUs: {
      badge: "Nosotros",
      title: "Comprometidos con la seguridad industrial",
      items: [
        {
          title: "Especialistas industriales",
          description:
            "Acompanamos operaciones de manufactura, logistica y construccion con soluciones de seguridad confiables.",
          icon: "factory",
        },
        {
          title: "Normativas al dia",
          description:
            "Nuestros productos y recomendaciones se alinean con estandares vigentes para reducir riesgos en campo.",
          icon: "badgeCheck",
        },
        {
          title: "Atencion cercana",
          description:
            "Desde la seleccion hasta la postventa, brindamos acompanamiento tecnico para cada equipo de trabajo.",
          icon: "users",
        },
      ],
    },
    featuredProducts: {
      badge: "Seleccion curada",
      title: "Productos destacados",
      description: "Explora algunas soluciones recomendadas para tu operacion.",
      viewAllLabel: "Ver todo el catalogo",
    },
  },
  regional: {
    hero: {
      badge: "Catalogo nacional de seguridad y trabajo",
      title: "Productos confiables para equipos de todo el pais",
      description:
        "En {clientName} conectamos calidad, cercania y atencion personalizada para acompanar cada necesidad operativa.",
      primaryCtaLabel: "Ver productos recomendados",
      secondaryCtaLabel: "Pedir asesoramiento",
      benefitsTitle: "Nuestro diferencial",
      stats: [
        {
          value: "+280",
          label: "Productos disponibles",
        },
        {
          value: "72 h",
          label: "Despacho estimado",
        },
        {
          value: "96%",
          label: "Satisfaccion de clientes",
        },
      ],
      benefits: [
        {
          title: "Calidad comprobada",
          description: "Seleccion de productos pensados para uso intensivo y seguro.",
          icon: "shieldCheck",
        },
        {
          title: "Cobertura regional",
          description: "Armamos entregas eficientes para distintos puntos del pais.",
          icon: "truck",
        },
        {
          title: "Atencion personalizada",
          description: "Te orientamos segun actividad, presupuesto y urgencia.",
          icon: "sparkles",
        },
      ],
    },
    aboutUs: {
      badge: "Quienes somos",
      title: "Cercania comercial con mirada tecnica",
      items: [
        {
          title: "Experiencia en campo",
          description: "Conocemos las necesidades reales de industrias y equipos operativos.",
          icon: "factory",
        },
        {
          title: "Compromiso normativo",
          description: "Priorizamos recomendaciones alineadas a seguridad y buenas practicas.",
          icon: "badgeCheck",
        },
        {
          title: "Relacion a largo plazo",
          description: "Acompanamos cada compra con seguimiento y respuesta cercana.",
          icon: "users",
        },
      ],
    },
    featuredProducts: {
      badge: "Recomendados",
      title: "Lo mas elegido por nuestros clientes",
      description: "Una seleccion pensada para cubrir necesidades frecuentes de proteccion y trabajo.",
      viewAllLabel: "Ver catalogo completo",
    },
  },
};

const configuredContent = homeContentByClient[activeClient.id] ?? defaultHomeContent;

const interpolateClientName = (text: string) => text.replaceAll("{clientName}", activeClient.name);

export const homeContent: HomeSectionsContent = {
  ...configuredContent,
  hero: {
    ...configuredContent.hero,
    description: interpolateClientName(configuredContent.hero.description),
  },
};
