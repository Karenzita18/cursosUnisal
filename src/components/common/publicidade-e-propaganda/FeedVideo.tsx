"use client";
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";

const FeedVideo = () => {
  const { ref, inView, entry } = useInView();
  return (
    <section
      className="bg-brand-100/20 relative overflow-hidden"
    >
      <div className="absolute w-2/5 -skew-x-12 h-full top-0 -right-16 bg-white opacity-5"></div>
      <div className="row relative">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className={`sectionTitle ${inView && "animate-fade-down"}`}>
              Veja nosso portfólio
            </h2>
          </div>
          <div className="mt-4">
            <img
              src="/img/publicidade/portfolio-pp.png"
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedVideo;
