import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin,  Crop, Pencil, Computer, Book, Brain, Speech, Github } from "lucide-react";
import { FaCss3Alt, FaHtml5, FaJava, FaJs, FaNode, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { SiSqlite } from "react-icons/si";


export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/maximogarmasarvazquez/",
    },
    {
        id: 2,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/maximogarmasarvazquez"
    }
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/mas-info",
    },
];

export const dataAboutPage = [
{
    id: 1,
    title: "Técnico Superior en Desarrollo Web y Aplicaciones Digitales",
    subtitle: "Instituto Superior Santa Rosa de Calamuchita",
    description: "Formación orientada al desarrollo de aplicaciones web modernas y distribuidas, abarcando tanto frontend como backend. Durante la carrera desarrollé proyectos individuales y grupales, aplicando buenas prácticas, trabajo en equipo y metodologías ágiles para crear soluciones digitales eficientes.",
    date: "2022 - 2024",
    tecnologias: "JavaScript • React • Node.js • SQL • SQLite • Tailwind CSS • GitHub • C#",
    type: "education"
},
{
    id: 2,
    title: "Diplomatura en Introducción a la Programación en Java",
    subtitle: "UTN Facultad Regional Villa María",
    description: "Primer acercamiento a la programación, enfocado en el desarrollo del pensamiento lógico y la resolución de problemas. Se trabajaron conceptos fundamentales como algoritmos, estructuras de control y programación orientada a objetos.",
    date: "2021 - 2022",
    tecnologias: "Java (POO) • HTML • CSS",
    type: "education"
},
{
  id: 3,
  type: "experience",
  title: "Desarrollador Full Stack Freelance",
  subtitle: "Proyecto para cooperativa eléctrica (geolocalización de infraestructura)",
  date: "Jul 2025",
  highlight: true,
  description: "Desarrollé de forma independiente una aplicación web para la visualización de nodos eléctricos sobre mapas interactivos, trabajando con un miembro del área de sistemas de una cooperativa. Integré una base de datos SQL existente y diseñé una API REST con Node.js y Express para la gestión de postes, subestaciones, consumos y servicios. Implementé geolocalización y renderizado de datos mediante Leaflet y OpenStreetMap, permitiendo visualizar nodos a partir de coordenadas geográficas. En el frontend, desarrollé una interfaz en React con funcionalidades de filtrado y visualización dinámica, consumiendo la API mediante fetch y procesando datos en formato JSON. El proyecto fue desarrollado en entorno local y entregado para uso interno de la organización.",
  tecnologias: "React • JavaScript • Node.js • Express • SQL • Leaflet • OpenStreetMap • CSS"
}

    
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 10,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 80,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 220,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 30,
        text: "Premios ganadores",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Brain/>,
        title: "Gestión de Contenidos",
        description: "Creación y administración de contenido para mejorar la interacción con la audiencia, ", 
    },
];
export const dataPortfolio = [
  // 🔥 PROYECTO DESTACADO (TU WEB)
  {
    id: 0,
    title: "Maxivaz Web Studio",
    image: "/images/p.png", // 👉 agregá la imagen
    urlDemo: "https://maxivaz.com.ar/",
    urlGithub: "",
    description:
      "Landing page profesional orientada a la captación de clientes, combinando diseño moderno, alto rendimiento y experiencia de usuario optimizada.",
    tech: ["Next.js", "React", "TailwindCSS", "UX/UI", "Vercel"],
    type: "work",
    details: [
      "Diseño enfocado en conversión de usuarios a clientes.",
      "Interfaz moderna con animaciones y microinteracciones.",
      "Optimización de rendimiento y tiempos de carga.",
      "Arquitectura escalable para futuros servicios digitales.",
      "Deploy en producción con Vercel.",
    ],
  },

  // 👇 TUS PROYECTOS EXISTENTES
  {
    id: 1,
    title: "Sistema de Geolocalización de Infraestructura Eléctrica",
    image: "/images/p6.png",
    urlDemo: "",
    urlGithub: "",
    description:
      "Aplicación web desarrollada para una cooperativa eléctrica que permite visualizar y gestionar nodos eléctricos en mapas interactivos.",
    tech: ["React", "Node.js", "Express", "SQL", "Leaflet", "OpenStreetMap"],
    type: "work",
    details: [
      "Desarrollo completo de una aplicación web para visualización de infraestructura eléctrica.",
      "Diseño e implementación de una API REST para gestionar postes, subestaciones, consumos y servicios.",
      "Integración con base de datos SQL existente de la cooperativa.",
      "Implementación de geolocalización y renderizado de nodos en mapas interactivos.",
      "Desarrollo de interfaz en React con filtros dinámicos y visualización por tipo de nodo.",
      "Consumo y procesamiento de datos en formato JSON desde el frontend.",
      "Proyecto entregado para uso interno en entorno productivo.",
    ],
  },

  {
    id: 2,
    title: "Landing Web Cabañas Siempre Verde",
    image: "/images/p7.png",
    urlDemo: "https://complejo-web.vercel.app/",
    urlGithub: "",
    description:
      "Landing page moderna y responsiva para un complejo de cabañas en Villa Ciudad Parque, enfocada en conversión mediante WhatsApp y experiencia visual atractiva.",
    tech: ["Next.js", "React", "TailwindCSS", "Vercel", "Responsive Design"],
    type: "work",
    details: [
      "Landing optimizada para conversión con WhatsApp.",
      "Diseño responsive completo.",
      "Optimización de imágenes con Next.js.",
      "Componentes reutilizables.",
      "Integración de mapas.",
      "Animaciones suaves UX.",
      "Deploy en Vercel.",
    ],
  },

  // PERSONAL
  {
    id: 3,
    title: "PokeApi App",
    image: "/images/p1.png",
    urlDemo: "https://pokemon-api-page.netlify.app/",
    urlGithub: "https://github.com/maximogarmasarvazquez/Pokemon-Api-Page",
    description:
      "Aplicación que consume la API de Pokémon permitiendo buscar, visualizar y comparar Pokémon.",
    tech: ["React", "API REST", "CSS"],
    type: "personal",
  },
  {
    id: 4,
    title: "Ecommerce",
    image: "/images/p2.png",
    urlDemo: "https://maximogarmasarvazquez.github.io/CarritoDeCompras/",
    urlGithub: "https://github.com/maximogarmasarvazquez/CarritoDeCompras",
    description:
      "Simulación de tienda online con carrito de compras y gestión de productos.",
    tech: ["JavaScript", "HTML", "CSS"],
    type: "personal",
  },
  {
    id: 5,
    title: "App del Clima",
    image: "/images/p4.png",
    urlDemo: "https://maximogarmasarvazquez.github.io/App-Api-Clima/",
    urlGithub: "https://github.com/maximogarmasarvazquez/App-Api-Clima",
    description:
      "Aplicación que muestra el clima en tiempo real mediante consumo de API externa.",
    tech: ["JavaScript", "API REST"],
    type: "personal",
  },
  {
    id: 6,
    title: "AlienCrush",
    image: "/images/p3.jpg",
    urlDemo: "https://github.com/maximogarmasarvazquez/AlienCrush?tab=readme-ov-file",
    urlGithub: "https://github.com/maximogarmasarvazquez/AlienCrush",
    description:
      "Videojuego móvil estilo match-3 desarrollado en Unity con C#.",
    tech: ["Unity", "C#"],
    type: "personal",
  },
];

export const techsDataBack = [
    {
        icon: <SiSqlite />,
        title: "SQLite",
    },
    {
        icon: <FaNode />,
        title: "NodeJs",
    },
    {
        icon: <FaReact />,
        title: "ReactJs",
    },
    {
        icon: <FaJava />,
        title: "Java",
    },
    {
        icon: <DiPostgresql />,
        title: "PostgreSQL",
    },

];




export const techsDataFront = [
    {
        icon: <FaJs />,
        title: "JavaScript",
    },
    {
        icon: <FaHtml5 />,
        title: "HTML5",
    },
    {
        icon: <FaCss3Alt />,
        title: "Css",
    },
    {
        icon: <RiTailwindCssFill />,
        title: "TailwindCss",
    },
    {
        icon: <FaReact />,
        title: "ReactJs",
    },
    
    

];

