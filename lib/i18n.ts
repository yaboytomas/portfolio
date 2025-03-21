// i18n.ts - Internationalization utilities for the portfolio

// Spanish translations for the entire site
export const es = {
  // Navigation
  nav: {
    about: "Acerca de",
    projects: "Proyectos",
    testimonials: "Testimonios",
    contact: "Contacto",
  },
  
  // Hero section
  hero: {
    subtitle: "Magia Web Dinámica",
    title: "Transformando Conceptos en Experiencias de Usuario Perfectas",
    description: "¡Hola! Soy Tomás, un Desarrollador basado en Chile.",
    cta: "Mostrar mi trabajo",
  },
  
  // Grid items
  grid: {
    item1: {
      title: "Priorizo la colaboración con el cliente, fomentando una comunicación abierta",
      description: "",
    },
    item2: {
      title: "Soy muy flexible con las comunicaciones en diferentes zonas horarias",
      description: "",
    },
    item3: {
      title: "Mi stack tecnológico",
      description: "Constantemente trato de mejorar",
    },
    item4: {
      title: "Entusiasta de la tecnología con pasión por el desarrollo.",
      description: "",
    },
    item5: {
      title: "Actualmente construyendo un módulo de llamadas automatizado para Odoo 14",
      description: "La información privilegiada",
    },
    item6: {
      title: "¿Quieres iniciar un proyecto juntos?",
      description: "",
    },
  },
  
  // Projects
  projects: {
    title: "Proyectos Recientes",
    project1: {
      title: "Sistema Solar 3D de Planetas para Explorar",
      description: "Explora las maravillas de nuestro sistema solar con esta cautivadora simulación 3D de los planetas usando Three.js.",
    },
    project2: {
      title: "Yoom - Aplicación de Videoconferencia",
      description: "Simplifica tu experiencia de videoconferencia con Yoom. Conéctate sin problemas con colegas y amigos.",
    },
    project3: {
      title: "AI Image SaaS - Aplicación tipo Canva",
      description: "Una aplicación REAL de Software como Servicio con funciones de IA y un sistema de pagos y créditos utilizando la última pila tecnológica.",
    },
    project4: {
      title: "Sitio Web 3D Animado de Apple iPhone",
      description: "Recreé el sitio web del iPhone 15 Pro de Apple, combinando animaciones GSAP y efectos 3D de Three.js.",
    },
  },
  
  // Testimonials
  testimonials: {
    testimonial1: {
      quote: "Colaborar con Tomás fue una experiencia fantástica. Su profesionalismo, capacidad de respuesta y compromiso con la entrega de un trabajo de calidad fueron evidentes durante todo el proyecto. A pesar de trabajar con un presupuesto pequeño, Tomás se aseguró de que el sitio web fuera funcional, visualmente atractivo y perfectamente alineado con mis objetivos para establecer una presencia en línea. Si estás buscando a alguien para crear un sitio web que realmente represente tu marca, Tomás es una excelente opción.",
      name: "Jordi Rius",
      title: "Propietario de Aluminios RH",
    },
    testimonial2: {
      quote: "Trabajar con Tomás en el desarrollo de un módulo de llamadas automatizado para Odoo 14 fue una experiencia fluida e impresionante. Su profesionalismo, experiencia técnica y compromiso para ofrecer resultados de primera categoría fueron evidentes de principio a fin. Tomás aborda cada desafío con entusiasmo y un enfoque claro en lograr el mejor resultado posible. Si estás buscando un desarrollador hábil para mejorar tu sistema Odoo.",
      name: "Lukas Bustos",
      title: "Gerente Comercial de Edu21",
    },
  },
  
  // Experience
  experience: {
    title: "Experiencia Laboral",
    exp1: {
      title: "Pasante Frontend",
      description: "Asistí en el desarrollo de una plataforma web utilizando XML y Python",
    },
    exp2: {
      title: "Desarrollador de Apps Móviles - JSM Tech",
      description: "Diseñé y desarrollé aplicaciones móviles para plataformas iOS y Android utilizando React Native.",
    },
    exp3: {
      title: "Proyecto Freelance de Desarrollo de Apps",
      description: "Lideré el desarrollo de una aplicación móvil para un cliente, desde el concepto inicial hasta la implementación en las tiendas de aplicaciones.",
    },
    exp4: {
      title: "Desarrollador Frontend Principal",
      description: "Desarrollé y mantuve características orientadas al usuario utilizando tecnologías frontend modernas.",
    },
  },
  
  // Footer
  footer: {
    rights: "Todos los derechos reservados.",
  },
  
  // Metadata
  metadata: {
    title: "Portafolio de Tomás",
    description: "Portafolio Moderno y Minimalista",
  }
};

// Default language (English)
export const en = {
  // Keep original English text for reference - can be populated as needed
};

// Export default language getter based on locale
export const getTranslations = (locale: string = 'en') => {
  switch (locale) {
    case 'es':
      return es;
    default:
      return en;
  }
}; 