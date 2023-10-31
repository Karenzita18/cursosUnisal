"use client";
import { useInView } from "react-intersection-observer";
import ReactPlayer from "react-player";

const FeedVideo = () => {
  const { ref, inView, entry } = useInView();
  return (
    <section
      ref={ref}
      id="portifolio"
      className="bg-brand-100/20 relative overflow-hidden"
    >
      <div className="absolute w-2/5 -skew-x-12 h-full top-0 -right-16 bg-white opacity-5"></div>
      <div className="row relative">
        <div className="container">
          <div className="text-center mb-5">
            <p
              className={`sectionSubTitle ${
                inView && "animate-fade-down animate-delay-300"
              }`}
            >
              Portifólio
            </p>
            <h2 className={`sectionTitle ${inView && "animate-fade-down"}`}>
              Veja nossas experiências
            </h2>
          </div>
          <div
            className={`mt-10 max-w-3xl mx-auto ${
              inView && "animate-fade-up animate-delay-300"
            }`}
          >
            <ReactPlayer
              url="https://youtu.be/D2Y54Q5DGi4"
              width={"100%"}
              height={"100%"}
              style={{
                margin: "auto",
                aspectRatio: "16/9",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedVideo;
