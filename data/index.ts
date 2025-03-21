export const navItems = [
  { name: "Acerca de", link: "#about" },
  { name: "Proyectos", link: "#projects" },
  { name: "Testimonios", link: "#testimonials" },
  { name: "Contacto", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Priorizo la colaboración con el cliente, fomentando una comunicación abierta",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Soy muy flexible con las comunicaciones en diferentes zonas horarias",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Mi stack tecnológico",
    description: "Constantemente trato de mejorar",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Entusiasta de la tecnología con pasión por el desarrollo.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Actualmente construyendo un módulo de llamadas automatizado para Odoo 14",
    description: "La información privilegiada",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "¿Quieres iniciar un proyecto juntos?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Sistema Solar 3D de Planetas para Explorar",
    des: "Explora las maravillas de nuestro sistema solar con esta cautivadora simulación 3D de los planetas usando Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Aplicación de Videoconferencia",
    des: "Simplifica tu experiencia de videoconferencia con Yoom. Conéctate sin problemas con colegas y amigos.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Aplicación tipo Canva",
    des: "Una aplicación REAL de Software como Servicio con funciones de IA y un sistema de pagos y créditos utilizando la última pila tecnológica.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Sitio Web 3D Animado de Apple iPhone",
    des: "Recreé el sitio web del iPhone 15 Pro de Apple, combinando animaciones GSAP y efectos 3D de Three.js.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Colaborar con Tomás fue una experiencia fantástica. Su profesionalismo, capacidad de respuesta y compromiso con la entrega de un trabajo de calidad fueron evidentes durante todo el proyecto. A pesar de trabajar con un presupuesto pequeño, Tomás se aseguró de que el sitio web fuera funcional, visualmente atractivo y perfectamente alineado con mis objetivos para establecer una presencia en línea. Si estás buscando a alguien para crear un sitio web que realmente represente tu marca, Tomás es una excelente opción.",
    name: "Jordi Rius",
    title: "Propietario de Aluminios RH",
  },
  {
    quote:
      "Trabajar con Tomás en el desarrollo de un módulo de llamadas automatizado para Odoo 14 fue una experiencia fluida e impresionante. Su profesionalismo, experiencia técnica y compromiso para ofrecer resultados de primera categoría fueron evidentes de principio a fin. Tomás aborda cada desafío con entusiasmo y un enfoque claro en lograr el mejor resultado posible. Si estás buscando un desarrollador hábil para mejorar tu sistema Odoo.",
    name: "Lukas Bustos",
    title: "Gerente Comercial de Edu21",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Pasante Frontend",
    desc: "Asistí en el desarrollo de una plataforma web utilizando XML y Python",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Desarrollador de Apps Móviles - JSM Tech",
    desc: "Diseñé y desarrollé aplicaciones móviles para plataformas iOS y Android utilizando React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Proyecto Freelance de Desarrollo de Apps",
    desc: "Lideré el desarrollo de una aplicación móvil para un cliente, desde el concepto inicial hasta la implementación en las tiendas de aplicaciones.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Desarrollador Frontend Principal",
    desc: "Desarrollé y mantuve características orientadas al usuario utilizando tecnologías frontend modernas.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href:"https://github.com/yaboytomas?tab=repositories",
  },
  {
    id: 2,
    img: "/insta.svg",
    href: "https://www.instagram.com/yaboytomas/",
  },
  {
    id: 3,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/szaboundurraga/",
  },
];
