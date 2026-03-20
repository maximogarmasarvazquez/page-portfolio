"use client";

import React from "react";
import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";
import { CircleUserRound, Mail, Phone } from "lucide-react";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";

const MasInfo = () => {
  return (
    <ContainerPage>
      <TransitionPage />

      <div className="flex flex-col items-center text-center mt-20 px-6 space-y-10">

        {/* Título */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
          ¡Contáctame!
        </h1>

        {/* Card de contacto */}
        <div className="w-full max-w-md bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
          
          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail className="text-lg text-blue-500" />
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:Maxivaz55@gmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Maxivaz55@gmail.com
              </a>
            </p>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-3">
            <CircleUserRound className="text-lg text-blue-500" />
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/maximogarmasarvazquez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                Maximo Garmasar Vazquez
              </a>
            </p>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-3">
            <Phone className="text-lg text-blue-500" />
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">WhatsApp:</span>{" "}
              <a
                href="https://wa.me/3546431626"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                +54 9 3546 431626
              </a>
            </p>
          </div>

        </div>

        {/* Botón */}
        <a
          href="mailto:Maxivaz55@gmail.com"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Enviarme un correo
        </a>

        {/* Tecnologías */}
        <div className="text-center mt-12">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Este sitio fue desarrollado con:
          </p>

          <div className="flex justify-center gap-8 text-4xl md:text-5xl text-gray-800 dark:text-white">
            <RiNextjsFill className="hover:text-gray-900 dark:hover:text-gray-400 transition-colors" />
            <RiTailwindCssFill className="hover:text-blue-500 transition-colors" />
            <FaReact className="hover:text-cyan-500 transition-colors" />
          </div>
        </div>

      </div>
    </ContainerPage>
  );
};

export default MasInfo;
