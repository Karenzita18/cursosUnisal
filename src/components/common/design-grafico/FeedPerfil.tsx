"use client";
import { useInView } from "react-intersection-observer";

const FeedDiferenciais = () => {
  const { ref, inView, entry } = useInView();

  return (
    <section
      ref={ref}
      className="bg-brand-100/20 mt-10 sm:mt-0"
    >
      <div className="mb-5">
        <h1
          className={`text-3xl sm:text-4xl font-bold text-brand-100 !leading-9 text-center  ${
            inView && "animate-fade-down "
          }`}
        >
          Perfil Engresso
        </h1>
      </div>
      <div className="row">
        <div className="container">
          <div className="mt-3 flex flex-col gap-y-3 font-medium text-lg">
            <p className="text-brand-100 text-justify">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedDiferenciais;
