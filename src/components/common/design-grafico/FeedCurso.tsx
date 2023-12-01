"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const FeedAbout = () => {
  const { ref, inView, entry } = useInView();

  return (
    <section className="bg-zinc-50 relative overflow-hidden">
      <div className="row relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="col-span-2">
              <Image
                src="/img/design-grafico/design-grafico-curso.png"
                width={500}
                height={500}
                alt="Panfleto Design Gráfico"
              />
            </div>
            <div className="col-span-3 md:col-span-3 md:pl-3 md:order-1 flex flex-col justify-center mt-3">
              <div className="flex flex-col justify-center">
                <h2 className={`text-3xl sm:text-4xl font-bold text-designgrafico-300 !leading-6 ${inView && "animate-fade-down"}`}>
                  Sobre o curso
                </h2>
                <div className="mt-3 flex flex-col gap-y-3 text-justify font-medium text-lg ">
                  <p className="text-designgrafico-300">
                  O curso de Design Gráfico é uma formação que capacita os estudantes a criarem projetos de comunicação visual impactantes e funcionais. O curso possui uma grade curricular ampla, incluindo fundamentos teóricos e práticos, teoria das cores, tipografia e projetos práticos durante o curso.
                  </p>
                  <p className="text-designgrafico-300">
                  Os alunos aprendem a utilizar ferramentas como Adobe Photoshop e Illustrator para criar materiais gráficos e, além disso, ao longo do processo, os estudantes desenvolvem habilidades criativas, técnicas e críticas, essenciais para uma carreira bem-sucedida como designer gráfico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedAbout;
