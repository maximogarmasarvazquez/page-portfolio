"use client";

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
  const isFeatured = data.title.includes("Maxivaz"); // 🔥 tu proyecto

  return (
    <div
      className={`
        group relative w-full max-w-7xl mx-auto p-5 md:p-8 rounded-3xl
        border
        ${isFeatured ? "border-white/30" : "border-white/10"}
        bg-gradient-to-b from-white/5 to-white/[0.02]
        backdrop-blur-xl

        hover:border-white/30
        transition-all duration-500

        overflow-hidden
      `}
    >
      {/* 🔥 BADGE */}
      {isFeatured && (
        <div className="absolute top-5 right-5 z-20 text-xs px-3 py-1 rounded-full bg-white text-black font-semibold">
          PROYECTO PRINCIPAL
        </div>
      )}

      {/* 🌫️ Glow más sutil */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/5 to-transparent" />

      <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">

        {/* 🖼️ IMAGEN */}
        <div className="relative w-full h-[240px] md:h-[380px] rounded-2xl overflow-hidden">
          <Image
            src={data.image}
            alt={data.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />
        </div>

        {/* 📄 CONTENIDO */}
        <div className="text-center md:text-left">

          {/* 🧠 Title */}
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 tracking-tight leading-snug">
            {data.title}
          </h3>

          {/* 📝 Desc */}
          <p className="text-gray-400 text-sm md:text-base mb-5 leading-relaxed max-w-xl">
            {data.description}
          </p>

          {/* 📌 DETALLES */}
          <ul className="space-y-2 text-sm text-gray-300 mb-6 text-left">
            {data.details.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 bg-white/60 rounded-full" />
                {item}
              </li>
            ))}
          </ul>

          {/* ⚙️ TECH */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
            {data.tech.map((tech, i) => (
              <span
                key={i}
                className="
                  text-xs px-3 py-1 rounded-md
                  bg-white/5 border border-white/10
                  text-gray-300
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* 🔗 BOTONES */}
          <div className="flex gap-3 justify-center md:justify-start">

            {data.urlDemo && (
              <Link
                href={data.urlDemo}
                target="_blank"
                className="
                  text-sm px-5 py-2 rounded-lg
                  bg-white text-black font-medium
                  hover:bg-white/80
                  transition-all duration-300
                  shadow-md shadow-white/10
                "
              >
                Ver sitio
              </Link>
            )}

            {data.urlGithub && (
              <Link
                href={data.urlGithub}
                target="_blank"
                className="
                  text-sm px-5 py-2 rounded-lg
                  border border-white/10
                  text-gray-300
                  hover:bg-white/10 hover:text-white
                  transition-all duration-300
                "
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