"use client";

import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import TransitionPage from "@/components/transition-page";
import { CircleUserRound, Mail, Phone } from "lucide-react";
import { FaReact } from "react-icons/fa";

const MasInfo = () => {
  return (
    <>
      <TransitionPage />

      <div className="flex flex-col items-center text-center mt-20 p-10 space-y-8">
        {/* Título */}
        <h1 className="text-5xl m-5 font-bold text-gray-800 dark:text-white">
          ¡Contáctame!
        </h1>

        {/* Información de contacto */}
        <div className="bg-gray-100 dark:bg-gray-800 p-8 sm:p-6 sm:pt-8 sm:pb-8 sm:w-[340px] md:w-[360px] rounded-xl shadow-lg">
          <div className="flex flex-wrap">
            <Mail className="text-lg mr-2 m-1" />
            <p className=" text-lg text-gray-700 dark:text-gray-300">
           Email:{" "}
            <a
              href="mailto:Maxivaz55@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Maxivaz55@gmail.com
            </a>
          </p>
          </div>
          
          <div className="mt-4 mb-4 flex flex-wrap">
          <CircleUserRound className="text-lg mr-2 m-1" />
          <p className="text-lg text-gray-700 dark:text-gray-300">
         LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/maximogarmasarvazquez"
              className="text-blue-600 dark:text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maxi Vazquez
            </a>
          </p>
        </div>
        <div className=" flex flex-wrap">
          <Phone className="text-lg mr-2 m-1" />
          <p className="text-lg text-gray-700 dark:text-gray-300 ">
          WhatsApp:{" "}
            <a
              href="https://wa.me/3546431626"
              className="text-blue-400 dark:green-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              +54 9 3546 431626
            </a>
          </p>
        </div>
        </div>

        {/* Botón de contacto (ahora con <a>) */}
        <a
          href="mailto:Maxivaz55@gmail.com"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Enviarme un correo
        </a>


        {/* Tecnologías utilizadas */}
        <div className="text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Este sitio fue desarrollado con:
          </p>
          <div className="flex justify-center gap-6 mt-4 text-5xl text-gray-800 dark:text-white mb-20">
            <RiNextjsFill className="hover:text-gray-900 dark:hover:text-gray-400 transition-colors" />
            <RiTailwindCssFill className="hover:text-blue-500 transition-colors" />
            <FaReact className="hover:text-green-700 dark:hover:text-green-700 transition-colors"/>

          </div>
        </div>
       
      </div>
    </>
  );
};

export default MasInfo;
