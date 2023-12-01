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
                src="/img/audiovisual/panfleto-audiovisual.png"
                width={500}
                height={500}
                alt="Panfleto AudioVisual"
              />
            </div>
            <div className="col-span-3 md:col-span-3 md:pl-3 md:order-1 flex flex-col justify-center mt-3">
              <div className="flex flex-col justify-center">
                <h2 className={`text-3xl sm:text-4xl font-bold text-audiovisual-100 !leading-6 ${inView && "animate-fade-down"}`}>
                  Sobre o curso
                </h2>
                <div className="mt-3 flex flex-col gap-y-3 text-justify font-medium text-lg ">
                  <p className="text-audiovisual-100">
                  O nosso novo curso Tecnólogo de Tecnologia em Produção Audiovisual e Multimídia foi elaborado para lhe propor uma visão ampla e objetiva das mais novas atualizações do mundo digital e da comunicação no audiovisual. 
                  </p>
                  <p className="text-audiovisual-100">
                  Serão desenvolvidas habilidades mediáticas (texto, imagem, som, vídeo) em plataformas digitais, mídias on e off line, com diferentes finalidades, (comunicação, informação, entretenimento, arte, etc.). Habilidades que irão acrescentar-lhe inúmeras oportunidades e diferenciais no mercado de trabalho, de modo empreendedor, agregando também, melhor expressão artística em desenvolvimento de conteúdos digitais, com destaque para a interface com o marketing digital.
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
