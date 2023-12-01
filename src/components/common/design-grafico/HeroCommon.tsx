"use client";

import { useInView } from "react-intersection-observer";

const HeroCommon = ({
  title = "Sanjefer Transportes e Logísitica",
  desc = "Empresa especializada em transportes e logística de alta qualidade para empresas.",
}) => {
  const { ref, inView, entry } = useInView();
  return (
    <section
      ref={ref}
      className="bg-[url(/img/design-grafico/fundo1-teste.png)] bg-cover bg-center relative"
    >
      <div className="row relative">
        <div className="container">
          <h1
            className={`font-bold text-white text-xl sm:text-2xl lg:text-3xl ${
              inView && "animate-fade-down animate-delay-500"
            }`}
          >
            {title}
          </h1>
          <p
            className={`text-lg text-zinc-100 font-medium ${
              inView && "animate-fade-down animate-delay-300"
            }`}
          >
            {desc}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroCommon;