import React from "react";
import Image from "next/image";
import Link from "next/link";

interface WorkExperienceProps {
  data: {
    title: string;
    description: string;
    tech: string[];
    details: string[];
    image: string;
    urlDemo?: string;
    urlGithub?: string;
  };
}

const WorkExperience = ({ data }: WorkExperienceProps) => {
  return (
    <div
      className="w-full max-w-7xl mx-auto p-4 md:p-6 rounded-2xl
      border border-zinc-700 bg-zinc-900/60 backdrop-blur-md
      transition duration-500 hover:scale-[1.01]"
    >
      <div className="grid md:grid-cols-2 gap-6 items-center">

        {/* 🖼️ IMAGEN */}
        <div className="w-full h-[220px] md:h-[350px] relative rounded-xl overflow-hidden group">
          <Image
            src={data.image}
            alt={data.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        {/* 📄 CONTENIDO */}
        <div className="text-center md:text-left">

          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            {data.title}
          </h3>

          <p className="text-zinc-400 text-sm md:text-base mb-4">
            {data.description}
          </p>

          {/* DETALLES */}
          <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-zinc-300 mb-4 text-left">
            {data.details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {/* TECNOLOGÍAS */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
            {data.tech.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-white text-black font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* BOTONES */}
          <div className="flex gap-3 justify-center md:justify-start">
            {data.urlDemo && (
              <Link
                href={data.urlDemo}
                target="_blank"
                className="text-sm bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
              >
                Ver demo
              </Link>
            )}

            {data.urlGithub && (
              <Link
                href={data.urlGithub}
                target="_blank"
                className="text-sm bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-lg transition"
              >
                Código
              </Link>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
