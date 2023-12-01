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
                  src="/img/publicidade/banner-desktop-pp.jpg"
                  width={1920}
                  height={700}
                  alt="Banner publicidade e propaganda desktop"
                  className="relative xl:object-cover xl:w-full 2xl:h-[40rem]"
                />
              </div>
              <div className="md:hidden h-96">
                <img
                  src="/img/publicidade/banner-mobile-pp.jpg"
                  alt="Banner publicidade e propaganda mobile"
                  className="relative object-cover h-full w-full"
                />
              </div>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className="relative">
              <div className="hidden md:block">
                <Image
                  src="/img/audiovisual/banner-audiovisual-desktop.png"
                  width={1920}
                  height={700}
                  alt="Banner audiovisual desktop"
                  className="relative xl:object-cover xl:w-full 2xl:h-[40rem]"
                />
              </div>
              <div className="md:hidden h-96">
                <img
                  src="/img/audiovisual/banner-mobile-oficial.png"
                  alt="Banner AudioVisual mobile"
                  className="relative object-cover h-full w-full"
                />
              </div>
            </div>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <div className="relative">
              <div className="hidden md:block">
                <Image
                  src="/img/design-grafico/banner-desktop-design.png"
                  width={1920}
                  height={700}
                  alt="Banner Design gráfico desktop"
                  className="relative xl:object-cover xl:w-full 2xl:h-[40rem]"
                />
              </div>
              <div className="md:hidden h-96">
                <img
                  src="/img/design-grafico/banner-mobile-design.png"
                  alt="Banner Design gráfico mobile"
                  className="relative object-cover h-full w-full"
                />
              </div>
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
