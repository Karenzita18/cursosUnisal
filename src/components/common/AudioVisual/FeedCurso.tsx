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
                src="/img/panfleto.webp"
                width={400}
                height={400}
                alt="Toalheiro Santa Bárbara"
              />
            </div>
            <div className="col-span-3 md:col-span-3 md:pl-6 md:order-1 flex flex-col justify-center">
              <div className="flex flex-col justify-center">
                <h2 className={`sectionTitle ${inView && "animate-fade-down"}`}>
                  Sobre o curso
                </h2>
                <div className="mt-3 flex flex-col gap-y-3 text-zinc-500 text-justify font-medium text-lg ">
                  <p>
                    Nosso novo curso de Tecnologia em Produção Audiovisual e Multimídia irá lhe propor uma visão ampla e objetiva das mais novas atualizações do mundo digital e da comunicação no audiovisual,com o propósito de adquirirem habilidades que irão lhes agregar inúmeras oportunidades e diferenciais no mercado de trabalho.
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
