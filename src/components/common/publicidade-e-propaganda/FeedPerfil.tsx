"use client";
import { useInView } from "react-intersection-observer";

const FeedDiferenciais = () => {
  const { ref, inView, entry } = useInView();

  return (
    <section
      ref={ref}
      className="bg-brand-100/20 mt-10 sm:mt-0"
    >
      <div className="mb-5">
        <h1
          className={`text-3xl sm:text-4xl font-bold text-brand-100 !leading-9 text-center  ${
            inView && "animate-fade-down "
          }`}
        >
          Perfil Engresso
        </h1>
      </div>
      <div className="row">
        <div className="container">
          <div className="mt-3 flex flex-col gap-y-3 font-medium text-lg">
          <p className="text-brand-100 text-justify">
              Profissional capaz de interpretar objetivos mercadológicos de empresas e instituições, traduzindo-os em estratégias de comunicação adequadas para diversas situações.
            </p>
            <p className="text-brand-100 text-justify">
              Desenvolver habilidades em planejamento, criação, produção, difusão, avaliação e gestão da comunicação publicitária em diversas áreas, como empresas especializadas, anunciantes, veículos, produtoras e institutos de pesquisa. Decifrar dados relacionados a consumidores, audiência, circulação de veículos de comunicação e mercado, aplicando-os no processo de comunicação publicitária.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedDiferenciais;
