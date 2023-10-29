"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  Missao,
  Visao,
  Valores,
} from "../icon";
import { FiPackage } from "react-icons/fi";

const FeedContador = () => {
  const { ref, inView, entry } = useInView();

  return (
    <section
      className="bg-brand-100/60 py-10"
      ref={ref}
    >
      <div className="row">
        <div className="container">
          <div className="flex place-content-around flex-wrap gap-y-6 gap-x-8">
            <div className="flex flex-col items-center max-w-xs h-auto justify-between ">
              <div className="w-16 h-16 flex items-end mx-auto text-white ">
                <Missao />
              </div>
              <div className="flex flex-col items-center mt-1">
                <h2 className="text-center text-white text-2xl font-semibold">
                  Missão
                </h2>
              </div>
            </div>
            <div className="flex flex-col items-center max-w-xs h-auto justify-between ">
              <div className="w-16 h-16 flex items-end mx-auto text-white ">
                <Visao />
              </div>
              <div className="flex flex-col items-center mt-1">
                <h2 className="text-center text-white text-2xl font-semibold">
                  Visão
                </h2>
              </div>
            </div>
            <div className="flex flex-col items-center max-w-xs h-auto justify-between ">
              <div className="w-16 h-16 flex items-end mx-auto text-white ">
                <Valores />
              </div>
              <div className="flex flex-col items-center mt-1">
                <h2 className="text-center text-white text-2xl font-semibold">
                  Valores
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedContador;
