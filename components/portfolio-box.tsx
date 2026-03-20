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
  return (
    <div
      className="group w-full max-w-sm p-5 rounded-2xl 
      border border-white/10 bg-white/5 backdrop-blur-md
      hover:scale-[1.03] hover:border-secondary/50
      transition-all duration-300"
    >
      {/* Imagen */}
      <div className="w-full h-[200px] overflow-hidden rounded-sm  mb-4">
        <Image
          src={data.image}
          alt={data.title}
          width={400}
          height={200}
          className="w-full h-full object-cover group-hover:scale-105 transition"
        />
      </div>

      {/* Título */}
      <h3 className="text-lg font-semibold text-white mb-2">
        {data.title}
      </h3>

      {/* Descripción */}
      <p className="text-sm text-gray-400 mb-4">
        {data.description}
      </p>

      {/* Tech */}
      <div className="flex flex-wrap gap-2 mb-4">
        {data.tech.map((tech, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 rounded-md bg-secondary/10 text-secondary"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Botones */}
      <div className="flex gap-3">
        {data.urlGithub && (
          <Link
            href={data.urlGithub}
            target="_blank"
            className="flex-1 text-center py-2 rounded-lg bg-slate-600 hover:bg-slate-600/80 transition text-sm"
          >
            GitHub
          </Link>
        )}

        {data.urlDemo && (
          <Link
            href={data.urlDemo}
            target="_blank"
            className="flex-1 text-center py-2 rounded-lg bg-secondary text-black hover:bg-secondary/80 transition text-sm"
          >
            Demo
          </Link>
        )}
      </div>
    </div>
  );
};

export default PortfolioBox;
