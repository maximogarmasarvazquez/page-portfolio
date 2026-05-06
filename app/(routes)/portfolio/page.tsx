import ContainerPage from "@/components/container";
import React from "react";
import TransitionPage from "@/components/transition-page";
import PortfolioBox from "@/components/portfolio-box";
import WorkExperience from "@/components/WorkExperience";
import { dataPortfolio } from "@/data";

type PortfolioItem =
  | {
      id: number;
      title: string;
      image: string;
      urlGithub: string;
      urlDemo: string;
      description: string;
      tech: string[];
      type: "personal";
    }
  | {
      id: number;
      title: string;
      image: string;
      urlGithub: string;
      urlDemo: string;
      description: string;
      tech: string[];
      type: "work";
      details: string[];
    };

const PortfolioPage = () => {
  const workProjects = dataPortfolio.filter(
    (p): p is Extract<PortfolioItem, { type: "work" }> =>
      p.type === "work"
  );

  const personalProjects = dataPortfolio.filter(
    (p): p is Extract<PortfolioItem, { type: "personal" }> =>
      p.type === "personal"
  );

  // 🔥 primer proyecto como destacado
  const featuredProject = workProjects[0];
  const restWork = workProjects.slice(1);

  return (
    <ContainerPage>
      <TransitionPage />

      <div className="flex flex-col gap-20 py-10">

        {/* 🔥 HERO / INTRO */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Mis <span className="text-secondary">Proyectos</span>
          </h1>
          <p className="text-gray-400">
            Una selección de trabajos donde combino diseño, desarrollo y experiencia de usuario.
          </p>
        </div>

        {/* ⭐ FEATURED PROJECT */}
        {featuredProject && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-center">
              Proyecto destacado
            </h2>

            <WorkExperience data={featuredProject} />
          </div>
        )}

        {/* 💼 EXPERIENCIA RESTANTE */}
        {restWork.length > 0 && (
          <div className="flex flex-col gap-8 max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-center">
              Experiencia profesional
            </h2>

            {restWork.map((project) => (
              <WorkExperience key={project.id} data={project} />
            ))}
          </div>
        )}

        {/* 📦 PROYECTOS PERSONALES */}
        <div className="flex flex-col gap-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">
            Proyectos académicos
          </h2>

          <div className="grid gap-8 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
            {personalProjects.map((data) => (
              <PortfolioBox key={data.id} data={data} />
            ))}
          </div>
        </div>

      </div>
    </ContainerPage>
  );
};

export default PortfolioPage;