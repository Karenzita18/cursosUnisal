"use client";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const FeedAbout = () => {
  const { ref, inView, entry } = useInView();

  return (
    <section
      ref={ref}
      id="curso"
      className="bg-brand-100/5 relative overflow-hidden"
    >
      <div className="row relative">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div
                className={`"mx-auto max-w-2xl ${
                  inView && "animate-fade-right animate-duration-700"
                }`}
              >
                <img
                  src="https://via.placeholder.com/400x400"
                  alt="Foto PP"
                  className="rounded-md shadow-lg"
                />
              </div>
            </div>
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
              <div className="mt-3 flex flex-col gap-y-3 text-zinc-500 text-justify font-medium text-lg">
                <p className={inView ? "animate-fade-left" : ""}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make 
                  a type specimen book. 
                </p>
                <p
                  className={
                    inView ? "animate-fade-left animate-delay-100" : ""
                  }
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make 
                  a type specimen book. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedAbout;
