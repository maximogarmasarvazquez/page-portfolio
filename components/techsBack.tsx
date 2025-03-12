"use client";

import { Database } from "lucide-react";
import SliderBack from "./slider-back";

const TechsBack = () => {
    return (
        <div className="p-5 mb-20 m-6  md:h-[260px] md:w-[370px] rounded-lg cursor-pointer bg-[#24455f] sm:flex-col 
    gap-x-3 sm:gap-x-0 group hover:bg-[#274b67] transition-all duration-300 hover:border-secondary border-2 flex flex-col
     items-center justify-center">
    
            {/* Ícono Principal */}
            <div className="mb-3 m-3 text-secondary">
            <Database />
            </div>
    
            {/* Título */}
            <h3 className="mb-3 text-lg text-white text-center">Back-end</h3>
    
            {/* Slider de Tecnologías */}
            <div className="w-full overflow-hidden">
                <SliderBack />
            </div>
        </div>
    );
}

export default TechsBack;
