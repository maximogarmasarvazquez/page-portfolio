import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin,  Crop, Pencil, Computer, Book, Brain, Speech, Github } from "lucide-react";
import { FaCss3Alt, FaHtml5, FaJs, FaNode, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

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
        title: "Técnico superior en desarrollo web y aplicaciones digitales",
        subtitle: "Instituto Superior Santa Rosa de Calamuchita",
        description: "El tecnico Superior en Desarrollo Web y Aplicaciones Digitales, es un profesional que desarrolla aplicaciones distribuidas en red que se ejecutan desde un servidor a un navegador web. Genera proyectos propios tomando decisiones personales o en grupo, para generar un modelo productivo más innovador,       competitivo e internacionalizado.",
        date: "2022 - 2024 ",
    },
    {
        id: 2,
        title: "Diplomatura en introducción a la porgramacion en Java",
        subtitle: "UTN Facultad Regional Villa Maria",
        description: "En la diplomatura en introduccion a la programcion en Java di mis primeros pasos en la programacion, algunos de los temas mas importantes fueron, pensamiento logico, desarrollo de algoritmos, variables, estructuras  de control, programacion orientada a objetos, metodos, clases, metodologias agiles, entre otros. ",
        date: "2021 - 2022",
    },
  
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
    {
        id: 1,
        title: "Buscador de Pokemones",
        image: "/images/p1.jpg",
         urlDemo: "https://maximogarmasarvazquez.github.io/Pokemon-Api-Page/",
        urlGithub: "https://github.com/maximogarmasarvazquez/Pokemon-Api-Page",
       
    },
    {
        id: 2,
        title: "Ecommerce",
        image: "/images/p2.png",
        urlDemo: "https://maximogarmasarvazquez.github.io/Pokemon-Api-Page/",
        urlGithub: "https://maximogarmasarvazquez.github.io/CarritoDeCompras/",
       
    },   {
        id: 3,
        title: "AlienCrush ",
        image: "/images/p3.jpg",
        urlDemo: "https://github.com/maximogarmasarvazquez/AlienCrush",
        urlGithub: "https://github.com/maximogarmasarvazquez/AlienCrush",
       
    },   {
        id: 4,
        title: "App del Clima",
        image: "/images/p4.png",
        urlDemo: "https://maximogarmasarvazquez.github.io/App-Api-Clima/",
        urlGithub: "https://github.com/maximogarmasarvazquez/App-Api-Clima",
       
    },
];

export const techsDataFront = [
    {
        icon: <FaJs />,
        title: "JavaScript",
    },
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
  

];




export const techsDataBack = [
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
    
    

];

