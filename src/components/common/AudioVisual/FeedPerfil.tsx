"use client";
import { useInView } from "react-intersection-observer";

const FeedDiferenciais = () => {
  const { ref, inView, entry } = useInView();

  return (
    <section
      className="bg-[url(/img/audiovisual/bg-fundo-audiovisual.jpeg)] bg-cover bg-center relative"
    >
      <div className="mb-5">
        <h1
          className={`text-3xl sm:text-4xl font-bold text-white !leading-9 text-center  ${
            inView && "animate-fade-down "
          }`}
        >
          Perfil Egresso
        </h1>
      </div>
      <div className="row">
        <div className="container">
          <div className="mt-3 flex flex-col gap-y-3 font-medium text-lg">
            <p className="text-white text-justify">
              Profissional capaz de exercer funções em diferentes cenários de comunicação audiovisual e multimídia, principalmente em ambientes digitais. Planeja, executa e controla os processos que envolvem a produção em comunicação audiovisual e multimídia, reunindo diferentes habilidades e competências.
            </p>
            <p className="text-white text-justify">
              Aplica habilidades midiáticas (texto, imagem, som, vídeo) em plataformas digitais, mídias on e off line, com diferentes finalidades, (comunidação, informação, entreterimento, arte ect..). Assume papel de agente tranformador do mercado, de modo empreendedor, agregando tecnologia as desenvolvimento de negócios e expressão artística. Desenvolve conteúdos para mídias, com destaque para a interface com o marketing digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedDiferenciais;
