"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const Introduction = () => {
  return (
    <div className="w-full flex items-center justify-center px-6 py-20">
      
      <div className="max-w-5xl w-full text-center md:text-left">

        {/* 🟣 Badge */}
        <div className="mb-6">
          <span className="px-4 py-1 text-sm rounded-full border border-white/10 bg-white/5 text-gray-300 backdrop-blur-md">
            Disponible 
          </span>
        </div>

        {/* 🔥 Título */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
          Hola, soy{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Maximo
          </span>
          <br />
          <span className="text-white/80">
            Full Stack Developer
          </span>
        </h1>

        {/* ⚡ Animación */}
        <h2 className="text-lg md:text-2xl text-gray-400 mb-6">
          <TypeAnimation
            sequence={[
              "Construyo aplicaciones web modernas.",
              2000,
              "Desarrollo experiencias escalables.",
              2000,
              "Trabajo con React, Node y SQL.",
              2000,
            ]}
            repeat={Infinity}
            speed={50}
          />
        </h2>

        {/* 📄 Descripción */}
        <p className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed">
          Desarrollo aplicaciones web{" "}
          <span className="text-white font-medium">
            modernas y escalables
          </span>
          , combinando diseño y tecnología para crear{" "}
          <span className="text-purple-400 font-medium">
            experiencias de alto nivel
          </span>.
        </p>

        {/* 🚀 Botones */}
        <div className="flex flex-col md:flex-row gap-4 mt-15 mb-6 justify-center md:justify-start">

          <Link
            href="/portfolio"
            className="
              px-6 py-3 rounded-xl
              bg-white text-black
              hover:bg-white/80
              transition-all duration-300
              shadow-lg shadow-white/10
            "
          >
            Ver proyectos
          </Link>

          <Link
            href="/mas-info"
            className="
              px-6 py-3 rounded-xl
              border border-white/20
              text-white
              hover:bg-white/10
              transition-all duration-300
            "
          >
            Contacto
          </Link>

        </div>

      </div>
    </div>
  );
};

export default Introduction;