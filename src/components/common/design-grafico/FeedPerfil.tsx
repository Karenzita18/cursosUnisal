"use client";
import { useInView } from "react-intersection-observer";

const FeedDiferenciais = () => {
  const { ref, inView, entry } = useInView();

  return (
    <section
      ref={ref}
      className="bg-[url(/img/design-grafico/fundo3-teste.png)] bg-cover bg-center relative"
    >
      <div className="mb-5">
        <h1
          className={`text-3xl sm:text-4xl font-bold text-white !leading-9 text-center  ${
            inView && "animate-fade-down "
          }`}
        >
          Perfil Engresso
        </h1>
      </div>
      <div className="row">
        <div className="container">
          <div className="mt-3 flex flex-col gap-y-3 font-medium text-lg">
            <p className="text-white text-justify">
            Profissional autônomo e ético, que domina as linguagens do design gráfico aplicadas a 
            diferentes mídias e contexto: online e offline. É capaz de empreender e propor soluções, 
            de modo individual ou em equipe, para empresas, instituições públicas ou do terceiro 
            setor nos mais diversos segmentos. Domina técnicas e aplicações de fotografia, 
            tipografia, ilustração, design ergonômico, de embalagens e de superfície. Utiliza 
            metodologias próprias da área e desenvolve métodos de criação, esteticamente 
            adequados, rentáveis e viáveis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedDiferenciais;
