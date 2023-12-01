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
              <img
                src="https://via.placeholder.com/500x500"
                width={500}
                height={500}
                alt="Panfleto AudioVisual"
              />
            </div>
            <div className="col-span-3 md:col-span-3 md:pl-3 md:order-1 flex flex-col justify-center mt-3">
                <div className="flex flex-col justify-center">
                  <p
                  className={`sectionSubTitle ${
                    inView && "animate-fade-down animate-delay-300"
                  }`}
                >
                  Sobre o curso
                </p>
                <h2 className={`sectionTitle ${inView && "animate-fade-down"}`}>
                  Nossa História
                </h2>
                <div className="mt-3 flex flex-col gap-y-3 text-justify font-medium text-lg ">
                  <p className="text-brand-100">
                    Comunicação social com habilitação em Publicidade e Propaganda, curso consolidado há 25 anos na instituição UNISAL - Centro Universitário Salesiano de São Paulo nos últimos 5 anos formou 134 publicitários.
                  </p>
                  <p className="text-brand-100">
                    Em uma união de técnica, estética e ética, pilares essenciais para a formação, o curso tem foco principal em transmitir diferentes formas de comunicar na teoria e na prática, com a aplicação de trabalhos que vão além da sala de aula os alunos vão criando portfólio e conquistando experiências que poderão agregar em suas carreiras profissionais.
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
