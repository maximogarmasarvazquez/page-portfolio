"use client";

import TransitionPage from "@/components/transition-page";
import Link from "next/link";
import { Code, Globe, Server } from "lucide-react";

const services = [
  {
    title: "Desarrollo Frontend",
    description:
      "Interfaces modernas, rápidas y optimizadas con foco en UX/UI, rendimiento y escalabilidad.",
    icon: Code,
    tech: ["React", "Next.js", "Tailwind", "TypeScript"],
  },
  {
    title: "Desarrollo Backend",
    description:
      "APIs robustas y escalables con Node.js, diseñadas para manejar datos de forma eficiente y segura.",
    icon: Server,
    tech: ["Node.js", "Express", "SQL", "PostgreSQL"],
  },
  {
    title: "Aplicaciones Full Stack",
    description:
      "Soluciones completas integrando frontend y backend, listas para producción y enfocadas en resultados.",
    icon: Globe,
    tech: ["React", "Node.js", "API REST", "Leaflet"],
  },
];

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />

      <div className="max-w-6xl mx-auto mt-20 px-6 py-20">

        {/* 🔥 HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Mis <span className="text-secondary">Servicios</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Desarrollo soluciones web modernas enfocadas en rendimiento,
            escalabilidad y experiencia de usuario, utilizando tecnologías actuales
            y buenas prácticas de desarrollo.
          </p>
        </div>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="
                  group relative p-8 rounded-2xl
                  border border-white/10
                  bg-white/5 backdrop-blur-xl

                  hover:border-white/20
                  transition-all duration-500

                  overflow-hidden
                "
              >
                {/* 🌫️ Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />

                {/* ICON */}
                <div
                  className="
                    mb-6 w-12 h-12 flex items-center justify-center
                    rounded-xl
                    bg-secondary/10
                    group-hover:bg-secondary/20
                    transition
                  "
                >
                  <Icon className="text-secondary w-6 h-6" />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-3 text-white tracking-tight">
                  {service.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2">
                  {service.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        text-xs px-3 py-1 rounded-full
                        bg-white/5 border border-white/10
                        text-gray-300
                        hover:bg-white/10 transition
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* 🔥 CTA */}
        <div className="mt-28 text-center">
          <p className="text-gray-400 mb-6 text-sm">
            ¿Tenés una idea o proyecto en mente?
          </p>

          <Link
            href="/mas-info"
            className="
              inline-block px-8 py-3 rounded-xl
              bg-secondary text-black font-medium

              hover:bg-secondary/80
              transition-all duration-300

              shadow-lg shadow-secondary/30
              hover:scale-105
            "
          >
            Hablemos
          </Link>
        </div>

      </div>
    </>
  );
};

export default ServicesPage;