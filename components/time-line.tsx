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
        <div className="flex flex-col justify-center divide-y divide-white/10">
            <div className="w-full max-w-3xl mx-auto md:pb-32 md:pt-10">
                <div className="-my-6">

                    {sortedData.map((data, index) => {

                        const Icon = data.type === "education" 
                            ? GraduationCap 
                            : Briefcase;

                        return (
                            <motion.div
                                key={data.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative py-8 pl-8 sm:pl-32 group transition-all duration-300
                                ${data.highlight ? "scale-[1.03]" : ""}
                                `}
                            >

                                {/* Badge destacado */}
                                {data.highlight && (
                                    <span className="absolute -top-2 right-0 text-xs px-3 py-1 
                                    bg-secondary text-black rounded-full font-semibold">
                                        Destacado
                                    </span>
                                )}

                                {/* Icono */}
                                <div className="absolute left-0 sm:left-[5.5rem] top-8 
                                    flex items-center justify-center w-10 h-10 
                                    rounded-full bg-darkBg border border-white/10">

                                    <Icon className="w-5 h-5 text-secondary" />
                                </div>

                                {/* Línea vertical */}
                                <div className="absolute left-4 sm:left-[6rem] top-16 bottom-0 w-px bg-white/20 mt-1"></div>

                                {/* Título */}
                                <h3 className={`mb-2 text-xl md:text-2xl font-semibold
                                    ${data.highlight ? "text-white" : "text-gray-200"}
                                `}>
                                    {data.title}
                                </h3>

                                {/* Fecha + subtítulo */}
                                <div className="flex flex-col sm:flex-row items-start mb-2">
                                        <time
                                    className={`sm:absolute sm:left-[6rem] sm:-translate-x-full sm:-ml-1 inline-flex 
                                        items-center justify-center text-xs font-medium tracking-wide
                                        px-2 py-1 mb-3 sm:mb-0 rounded-full whitespace-nowrap
                                        ${data.highlight 
                                        ? "text-black bg-secondary" 
                                        : "text-secondary bg-secondary/10"}
                                    `}
                                    >
                                    {data.date}
                                    </time>
                                    <div className="text-sm md:text-base text-gray-300 font-medium">
                                        {data.subtitle}
                                    </div>
                                </div>

                                {/* Descripción */}
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
                                    {data.description}
                                </p>

                                {/* Tecnologías */}
                                {data.tecnologias && (
                                    <p className="mt-3 text-xs md:text-sm text-secondary">
                                        {data.tecnologias}
                                    </p>
                                )}

                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </div>
    );
}

export default TimeLine;
