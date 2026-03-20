import ContainerPage from "@/components/container";
import React from "react";
import TransitionPage from "@/components/transition-page";
import PortfolioBox from "@/components/portfolio-box";
import WorkExperience from "@/components/WorkExperience";
import { dataPortfolio } from "@/data";

// 👇 TIPADO CORRECTO
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
      details: string[]; // 👈 obligatorio SOLO acá
    };

const PortfolioPage = () => {
  const workProject = dataPortfolio.find(
    (p): p is Extract<PortfolioItem, { type: "work" }> =>
      p.type === "work"
  );

  const personalProjects = dataPortfolio.filter(
    (p): p is Extract<PortfolioItem, { type: "personal" }> =>
      p.type === "personal"
  );

  return (
    <ContainerPage>
      <TransitionPage />

      <div className="flex flex-col justify-center h-full">

        {/* EXPERIENCIA */}
        <h1 className="text-2xl md:text-4xl text-center mb-8">
          Experiencia <span className="text-secondary font-bold">Profesional</span>
        </h1>

        {workProject && (
          <WorkExperience data={workProject} />
        )}

        {/* PROYECTOS */}
        <h1 className="text-2xl md:text-4xl text-center mt-16 mb-8">
          Proyectos <span className="text-secondary font-bold">Academicos</span>
        </h1>

        <div className="grid gap-8 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {personalProjects.map((data) => (
            <PortfolioBox key={data.id} data={data} />
          ))}
        </div>

      </div>
    </ContainerPage>
  );
};

export default PortfolioPage;
