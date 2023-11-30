"use client";
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";
import Image from "next/image";

const FeedVideo = () => {
  const { ref, inView, entry } = useInView();
  return (
    <section
      className="bg-[url(/img/audiovisual/bg-fundo-portifolio.png)] bg-cover bg-center relative"
    >
      <div className="absolute w-2/5 -skew-x-12 h-full top-0 -right-16 bg-white opacity-5"></div>
      <div className="row relative">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className={`text-3xl sm:text-4xl font-bold text-white !leading-6 ${inView && "animate-fade-down"}`}>
              Veja nosso portifólio
            </h2>
          </div>
          <div className="mt-4">
            <img
              src="/img/audiovisual/portifolio-audiovisual.png"
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedVideo;
