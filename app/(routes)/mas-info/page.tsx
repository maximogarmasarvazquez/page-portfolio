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

      <div className="flex flex-col items-center text-center mt-20 px-6 space-y-12">

        {/* 🔥 TÍTULO */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
          Trabajemos <span className="text-secondary">juntos</span>
        </h1>

        {/* 🔥 CARD */}
        <div
          className="
            relative w-full max-w-md
            p-8 space-y-6
            rounded-2xl

            bg-white/5 backdrop-blur-xl
            border border-white/10

            shadow-xl shadow-black/30
          "
        >
          {/* glow */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl" />

          {/* EMAIL */}
          <div className="flex items-center gap-3 text-left">
            <Mail className="text-secondary" />
            <p className="text-gray-300 text-sm">
              <span className="font-medium text-white">Email:</span>{" "}
              <a
                href="mailto:Maxivaz55@gmail.com"
                className="hover:text-secondary transition"
              >
                Maxivaz55@gmail.com
              </a>
            </p>
          </div>

          {/* LINKEDIN */}
          <div className="flex items-center gap-3 text-left">
            <CircleUserRound className="text-secondary" />
            <p className="text-gray-300 text-sm">
              <span className="font-medium text-white">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/maximogarmasarvazquez"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition"
              >
                maximo garmasar vazquez
              </a>
            </p>
          </div>

          {/* WHATSAPP */}
          <div className="flex items-center gap-3 text-left">
            <Phone className="text-secondary" />
            <p className="text-gray-300 text-sm">
              <span className="font-medium text-white">WhatsApp:</span>{" "}
              <a
                href="https://wa.me/3546431626"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition"
              >
                +54 9 3546 431626
              </a>
            </p>
          </div>
        </div>

        {/* 🔥 CTA */}
        <a
          href="mailto:Maxivaz55@gmail.com"
          className="
            px-6 py-3 rounded-xl
            bg-secondary text-black font-medium

            hover:bg-secondary/80
            transition-all duration-300

            shadow-lg shadow-secondary/30
            hover:scale-105
          "
        >
          Enviar mensaje
        </a>

        {/* 🔥 STACK */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6 text-sm">
            Este sitio fue desarrollado con
          </p>

          <div className="flex justify-center gap-10 text-4xl text-white/70">
            <RiNextjsFill className="hover:text-white transition duration-300 hover:scale-110" />
            <RiTailwindCssFill className="hover:text-secondary transition duration-300 hover:scale-110" />
            <FaReact className="hover:text-cyan-400 transition duration-300 hover:scale-110" />
          </div>
        </div>

      </div>
    </ContainerPage>
  );
};

export default MasInfo;