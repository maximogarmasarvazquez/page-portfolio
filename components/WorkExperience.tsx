import React from "react";
import Image from "next/image";

interface WorkExperienceProps {
  data: {
    title: string;
    description: string;
    tech: string[];
    details: string[];
    image: string;
  };
}

const WorkExperience = ({ data }: WorkExperienceProps) => {
  return (
    <div
      className="w-full max-w-7xl mx-auto p-4 md:p-6 rounded-2xl
      border border-secondary/30 bg-secondary/5 backdrop-blur-md"
    >
      <div className="grid md:grid-cols-2 gap-6 items-center">
        
        {/* 🖼️ IMAGEN */}
        <div className="w-full h-[220px] md:h-[350px] relative rounded-xl overflow-hidden">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
          />
        </div>

        {/* 📄 CONTENIDO */}
        <div className="text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            {data.title}
          </h3>

          <p className="text-gray-400 text-sm md:text-base mb-4">
            {data.description}
          </p>

          <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-gray-300 mb-4 text-left">
            {data.details.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {data.tech.map((tech, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-md bg-secondary text-black"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkExperience;
