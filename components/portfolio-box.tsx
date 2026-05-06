"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
    description: string;
    tech: string[];
  };
}

const PortfolioBox = ({ data }: PortfolioBoxProps) => {
  const isFeatured = data.id === 0; // 🔥 tu web

  return (
    <div
      className="
        group relative w-full max-w-sm p-5 rounded-2xl
        border border-white/10
        bg-gradient-to-b from-white/5 to-white/[0.02]
        backdrop-blur-xl

        hover:border-white/20
        hover:-translate-y-1
        transition-all duration-300

        overflow-hidden
      "
    >
      {/* 🔥 BADGE DESTACADO */}
      {isFeatured && (
        <div className="absolute top-4 right-4 z-20 text-[10px] px-2 py-1 rounded-full bg-white text-black font-semibold">
          DESTACADO
        </div>
      )}

      {/* 🌫️ Glow sutil */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-white/5 to-transparent" />

      {/* 🖼 Imagen */}
      <div className="relative w-full h-[200px] overflow-hidden rounded-xl mb-5">
        <Image
          src={data.image}
          alt={data.title}
          width={400}
          height={200}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />
      </div>

      {/* 📦 Contenido */}
      <div className="relative z-10">

        {/* 🧠 Title */}
        <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
          {data.title}
        </h3>

        {/* 📝 Desc */}
        <p className="text-sm text-gray-400 mb-5 leading-relaxed line-clamp-3">
          {data.description}
        </p>

        {/* ⚙️ Tech */}
        <div className="flex flex-wrap gap-2 mb-6">
          {data.tech.map((tech, i) => (
            <span
              key={i}
              className="
                text-[11px] px-2.5 py-1 rounded-md
                bg-white/5 border border-white/10
                text-gray-300
              "
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 🔗 Actions */}
        <div className="flex gap-3">

          {data.urlGithub && (
            <Link
              href={data.urlGithub}
              target="_blank"
              className="
                flex-1 text-center py-2 rounded-lg
                border border-white/10
                text-gray-300
                hover:bg-white/10 hover:text-white
                transition-all duration-300 text-sm
              "
            >
              Código
            </Link>
          )}

          {data.urlDemo && (
            <Link
              href={data.urlDemo}
              target="_blank"
              className="
                flex-1 text-center py-2 rounded-lg
                bg-white text-black font-medium
                hover:bg-white/80
                transition-all duration-300 text-sm
                shadow-md shadow-white/10
              "
            >
              Ver sitio
            </Link>
          )}

        </div>
      </div>
    </div>
  );
};

export default PortfolioBox;