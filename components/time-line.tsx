"use client";

import { dataAboutPage } from "@/data";
import { GraduationCap, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const TimeLine = () => {

  const sortedData = [...dataAboutPage].sort((a, b) => {
    const aHighlight = a.highlight ? 1 : 0;
    const bHighlight = b.highlight ? 1 : 0;
    return bHighlight - aHighlight;
  });

  return (
    <div className="flex flex-col justify-center">
      <div className="w-full max-w-3xl mx-auto md:pb-20 md:pt-10">

        <div className="relative">

          {/* 🔥 Línea vertical global */}
          <div className="
            absolute left-4 md:left-[6rem] top-0 bottom-0
            w-px bg-white/20
          " />

          {sortedData.map((data, index) => {

            const Icon =
              data.type === "education"
                ? GraduationCap
                : Briefcase;

            return (
              <motion.div
                key={data.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`
                  relative py-10 pl-12 md:pl-40
                  group
                  ${data.highlight ? "scale-[1.02]" : ""}
                `}
              >

                {/* 🔥 BADGE */}
                {data.highlight && (
                  <span className="
                    absolute right-0 top-4
                    text-xs px-3 py-1
                    bg-secondary text-black
                    rounded-full font-semibold
                  ">
                    Destacado
                  </span>
                )}

                {/* 🔥 ICONO PERFECTAMENTE CENTRADO */}
                <div className="
                  absolute left-4 md:left-[6rem] top-10
                  -translate-x-1/2
                  flex items-center justify-center
                  w-10 h-10
                  rounded-full
                  bg-darkBg border border-white/10
                  shadow-lg shadow-secondary/20
                ">
                  <Icon className="w-5 h-5 text-secondary" />
                </div>

                {/* 🔥 CONTENIDO */}
                <div>

                  {/* TITLE */}
                  <h3 className={`
                    mb-2 text-xl md:text-2xl font-semibold
                    ${data.highlight ? "text-white" : "text-gray-200"}
                  `}>
                    {data.title}
                  </h3>

                  {/* DATE + SUBTITLE */}
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">

                    <time className={`
                      text-xs px-3 py-1 rounded-full w-fit
                      ${data.highlight
                        ? "bg-secondary text-black"
                        : "bg-secondary/10 text-secondary"
                      }
                    `}>
                      {data.date}
                    </time>

                    <span className="text-sm md:text-base text-gray-400">
                      {data.subtitle}
                    </span>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
                    {data.description}
                  </p>

                  {/* TECH */}
                  {data.tecnologias && (
                    <p className="mt-3 text-xs md:text-sm text-secondary">
                      {data.tecnologias}
                    </p>
                  )}

                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default TimeLine;