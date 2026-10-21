export type ThemeMode = "light" | "dark";

export type ThemeColors = {
  primary: string;
  bg: string;
  text: string;
  accent?: string;
  onPrimary?: string;
};

export type ThemeConfig = Record<ThemeMode, ThemeColors>;

export type ClientConfig = {
  id: string;
  name: string;
  whatsappNumber: string;
  linkedinUrl: string;
  githubUrl: string;
  seo: { title: string; description: string };
  theme: ThemeConfig;
};

const clientConfigs: Record<string, ClientConfig> = {
  default: {
    id: "default",
    name: "Mi Tienda",
    whatsappNumber: "5491112345678",
    linkedinUrl: "https://www.linkedin.com/in/tu-perfil",
    githubUrl: "https://github.com/tu-usuario",
    seo: {
      title: "Mi Tienda | Catálogo online",
      description: "Catálogo online de Mi Tienda: explorá los productos y consultá por WhatsApp.",
    },
    theme: {
      light: {
        primary: "#2563eb",
        bg: "#f4f7fb",
        text: "#0f172a",
        accent: "#1d4ed8",
      },
      dark: {
        primary: "#60a5fa",
        bg: "#0b1120",
        text: "#f8fafc",
        accent: "#3b82f6",
      },
    },
  },
  nordic: {
    id: "nordic",
    name: "Nordic Catalog",
    whatsappNumber: "5491112345678",
    linkedinUrl: "https://www.linkedin.com/in/tu-perfil",
    githubUrl: "https://github.com/tu-usuario",
    seo: {
      title: "Nordic Catalog | Protección industrial",
      description: "Soluciones técnicas de protección industrial: productos resistentes y soporte técnico para equipos exigentes.",
    },
    theme: {
      light: {
        primary: "#0f766e",
        bg: "#f0fdfa",
        text: "#134e4a",
        accent: "#0d9488",
      },
      dark: {
        primary: "#2dd4bf",
        bg: "#042f2e",
        text: "#ccfbf1",
        accent: "#14b8a6",
      },
    },
  },
  industrial: {
  id: "industrial",
  name: "Industrial Safety",
  whatsappNumber: "5491112345678",
  linkedinUrl: "https://www.linkedin.com/in/tu-perfil",
  githubUrl: "https://github.com/tu-usuario",
  seo: {
    title: "Industrial Safety | Equipamiento de seguridad industrial",
    description:
      "Equipamiento de seguridad industrial certificado, stock inmediato y asesoría técnica para proteger a tu equipo.",
  },
  theme: {
    light: {
      primary: "#f59e0b", // amarillo seguridad
      bg: "#f9fafb",      // gris claro neutro
      text: "#111827",    // casi negro
      accent: "#d97706",  // naranja industrial
      onPrimary: "#111827", // texto oscuro sobre amarillo
    },
    dark: {
      primary: "#fbbf24", // amarillo más brillante
      bg: "#0f172a",      // azul oscuro industrial
      text: "#f3f4f6",    // gris claro
      accent: "#f59e0b",  // naranja-amarillo intenso
      onPrimary: "#111827", // texto oscuro sobre amarillo
    },
  },
},
regional: {
  id: "regional",
  name: "Raíces Argentinas",
  whatsappNumber: "5491112345678",
  linkedinUrl: "https://www.linkedin.com/in/tu-perfil",
  githubUrl: "https://github.com/tu-usuario",
  seo: {
    title: "Raíces Argentinas | Productos de seguridad y trabajo",
    description: "Catálogo nacional de productos de seguridad y trabajo con atención personalizada para equipos de todo el país.",
  },
  theme: {
    light: {
      primary: "#7a4e2d",   // cuero
      bg: "#f5efe6",        // crema
      text: "#3e2c1c",      // marrón oscuro
      accent: "#6b8e23"     // verde mate
    },
    dark: {
      primary: "#c08a5b",   // cuero claro
      bg: "#1e1b18",        // fondo oscuro cálido
      text: "#f5efe6",      // crema
      accent: "#8fae3c"     // verde mate claro
    },
  },
}
};

const configuredClientId = import.meta.env.VITE_CLIENT_ID;
const activeClientId =
  configuredClientId && configuredClientId in clientConfigs ? configuredClientId : "default";

export const activeClient = clientConfigs[activeClientId];
export const clients = clientConfigs;

export const applyDocumentMeta = () => {
  document.title = activeClient.seo.title;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", activeClient.seo.description);
};
