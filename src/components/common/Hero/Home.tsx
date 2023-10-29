"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { Link as LinkScroll } from "react-scroll";
import Image from "next/image";

const HeroHome = () => {
  return (
    <div className="relative mt-20">
      <div className="flex absolute -bottom-5 left-0 w-full z-10 h-12">
        <div className=""></div>
      </div>

      <Swiper
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        autoplay
        loop
        modules={[Navigation, Autoplay]}
        className="mySwiper relative"
      >
        <SwiperSlide>
          {({ isActive }) => (
            <div className="relative">
              <div className="hidden md:block">
                <Image
                  src="/img/banners/banners.png"
                  width={1920}
                  height={700}
                  alt="Faça sua cotação!"
                  className="relative xl:object-cover xl:w-full 2xl:h-[40rem]"
                />
              </div>
              <div className="md:hidden h-96">
                <Image
                  src="/img/banners/banners.png"
                  width={1920}
                  height={700}
                  alt="Faça sua cotação!"
                  className="relative object-cover h-full w-full"
                />
              </div>
              <section className="absolute w-full h-full flex flex-col justify-center place-content-center inset-0 bg-black/40">
                <div className="row">
                  <div className="container">
                    <h1
                      className={`font-black text-2xl sm:text-2xl lg:text-4xl xl:text-5xl text-white text-center ${
                        isActive && "animate-fade-down"
                      }`}
                    >
                      What is Lorem Ipsum?
                    </h1>
                    <p
                      className={`text-center text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-medium ${
                        isActive && "animate-fade-down"
                      }`}
                    >
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className="flex place-content-center mt-5 ">
                      <LinkScroll
                        smooth
                        to="servicos"
                        href="/"
                        offset={-180}
                        className={`text-white text-lg font-bold rounded-full px-5 py-2 border border-white ${
                          isActive && "animate-fade-up"
                        } `}
                      >
                        Saiba Mais
                      </LinkScroll>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className="relative">
              <div className="relative hidden md:block">
                <div className="absolute z-30 bg-black/50 w-full h-full inset-0"></div>
                <div className="absolute w-full h-full z-10 flex items-center place-content-end">
                  <div className="sm:max-w-[16rem] lg:max-w-xs xl:max-w-md mr-10 lg:mr-20">
                    <Image
                      src="/img/banners/banners.png"
                      width={880}
                      height={550}
                      alt="Faça sua cotação!"
                      className="relative"
                    />
                  </div>
                </div>
                <Image
                  src="/img/banners/banners.png"
                  width={1920}
                  height={700}
                  alt="Faça sua cotação!"
                  className="relative xl:object-cover xl:w-full 2xl:h-[40rem]"
                />
              </div>

              <div className="relative md:hidden h-96">
                <div className="absolute z-30 bg-black/50 w-full h-full inset-0"></div>
                <div className="absolute w-full h-full flex items-center place-content-end">
                  <div className="max-w-[18rem]">
                    <Image
                      src="/img/banners/banners.png"
                      width={583}
                      height={604}
                      alt="Faça sua cotação!"
                      className="relative"
                    />
                  </div>
                </div>
                <Image
                  src="/img/banners/banners.png"
                  width={1920}
                  height={700}
                  alt="Faça sua cotação!"
                  className="relative object-cover h-full w-full"
                />
              </div>
              <section className="absolute w-full h-full flex flex-col justify-center place-content-center inset-0 z-30">
                <div className="row">
                  <div className="container">
                    <div className="">
                      <h1
                        className={`hidden sm:block font-black text-2xl sm:text-2xl lg:text-4xl xl:text-5xl text-white text-center ${
                          isActive && "animate-fade-down"
                        }`}
                      >
                        What is Lorem Ipsum?
                      </h1>
                      <h1
                        className={`sm:hidden font-black text-2xl sm:text-2xl lg:text-4xl xl:text-5xl text-white text-center max-w-[18rem] mx-auto ${
                          isActive && "animate-fade-down"
                        }`}
                      >
                        What is Lorem Ipsum?
                      </h1>
                      <p
                        className={`text-center text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-medium max-w-4xl mx-auto ${
                          isActive && "animate-fade-down"
                        }`}
                      >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      </p>
                      <div
                        className={`flex place-content-center mt-5 ${
                          isActive && "animate-fade-up"
                        }`}
                      >
                        <LinkScroll
                          smooth
                          to="contato"
                          href="/"
                          offset={-180}
                          className="text-white text-lg font-bold rounded-full px-5 py-2 border border-white"
                        >
                          Saiba Mais
                        </LinkScroll>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className="relative">
              <div className="hidden md:block ">
                <Image
                  src="/img/banners/banners.png"
                  width={1920}
                  height={700}
                  alt="Faça sua cotação!"
                  className="relative xl:object-cover xl:w-full 2xl:h-[40rem]"
                />
              </div>
              <div className="md:hidden h-96">
                <Image
                  src="/img/banners/banners.png"
                  width={900}
                  height={405}
                  alt="Faça sua cotação!"
                  className="object-cover object-right h-full w-ful"
                />
              </div>
              <section className="absolute w-full h-full flex flex-col justify-center place-content-center inset-0 bg-black/40">
                <div className="row">
                  <div className="container">
                    <h1
                      className={`font-black text-2xl sm:text-2xl lg:text-4xl xl:text-5xl text-white text-center ${
                        isActive && "animate-fade-down"
                      }`}
                    >
                      What is Lorem Ipsum?
                    </h1>
                    <p
                      className={`"text-center text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white font-medium ${
                        isActive && "animate-fade-down"
                      }`}
                    >
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div
                      className={`flex place-content-center mt-5 ${
                        isActive && "animate-fade-up"
                      }`}
                    >
                      <LinkScroll
                        smooth
                        to="contato"
                        href="/"
                        offset={-180}
                        className="text-white text-lg font-bold rounded-full px-5 py-2 border border-white"
                      >
                        Saiba Mais
                      </LinkScroll>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
        </SwiperSlide>
      </Swiper>
      <div className="absolute h-full w-full flex items-center place-content-between inset-0">
        <div className="prev text-5xl text-zinc-100/50 cursor-pointer relative z-10">
          <RxCaretLeft />
        </div>
        <div className="next text-5xl text-zinc-100/50 cursor-pointer relative z-10">
          <RxCaretRight />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
