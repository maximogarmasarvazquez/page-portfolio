"use client";

import TransitionPage from "@/components/transition-page";
import Link from "next/link";
import { Code, Globe, Server } from "lucide-react";

const services = [
  {
    title: "Desarrollo Frontend",
    description:
      "Desarrollo interfaces modernas, rápidas y responsivas utilizando React y Next.js, priorizando la experiencia del usuario y un diseño limpio y profesional.",
    icon: Code,
    tech: ["React", "Next.js", "Tailwind", "TypeScript"],
  },
  {
    title: "Desarrollo Backend",
    description:
      "Diseño APIs REST escalables con Node.js y Express, gestionando datos de forma eficiente con bases SQL y aplicando buenas prácticas de arquitectura.",
    icon: Server,
    tech: ["Node.js", "Express", "SQL", "PostgreSQL"],
  },
  {
    title: "Aplicaciones Full Stack",
    description:
      "Desarrollo soluciones completas integrando frontend y backend, incluyendo consumo de APIs, manejo de datos y visualización interactiva como en proyectos reales de geolocalización.",
    icon: Globe,
    tech: ["React", "Node.js", "API REST", "Leaflet"],
  },
];

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />

      <div className="max-w-6xl mx-auto mt-20 px-6 py-20">


        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Mis <span className="text-secondary">Servicios</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Soy desarrollador web especializado en frontend con experiencia en aplicaciones full stack.
            Me enfoco en crear soluciones eficientes, bien diseñadas y centradas en el usuario, aplicando
            buenas prácticas y tecnologías modernas.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-white/10 
                bg-white/5 backdrop-blur-md
                hover:border-secondary/50 hover:scale-[1.04] 
                hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]
                transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6 w-12 h-12 flex items-center justify-center 
                rounded-xl bg-secondary/10 group-hover:bg-secondary/20 transition">
                  <Icon className="text-secondary w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md 
                      bg-secondary/10 text-secondary border border-secondary/20
                      hover:bg-secondary/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <p className="text-gray-400 mb-6">
            ¿Tenés una idea o proyecto en mente?
          </p>

          <Link
            href="/mas-info"
            className="inline-block px-8 py-3 rounded-xl 
            bg-secondary text-black font-semibold
            hover:bg-secondary/80 transition"
          >
            Hablemos
          </Link>
        </div>

      </div>
    </>
  );
};

export default ServicesPage;
