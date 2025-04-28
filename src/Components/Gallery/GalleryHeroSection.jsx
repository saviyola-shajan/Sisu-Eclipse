import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Header from "../Header";
import swp1 from "../../assets/images/Rectangle 5.png"
function GalleryHeroSection() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="absolute top-6 left-0 w-full z-20">
        <Header />
      </div>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#1a0914] via-[#140b1d] to-[#0a0713]">
        <h1 className="absolute top-32 left-1/2 transform -translate-x-1/2 text-[12rem] font-bold text-white/5 uppercase tracking-widest z-0 whitespace-nowrap">
          Art Works
        </h1>
        <div className="relative z-10 flex flex-col items-center mt-52 px-4 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">
            <div className="lg:text-left w-full lg:w-1/2">
              <h2 className="text-5xl md:text-8xl font-bold text-[#F69005]">
                 Exclusive <br/>Art
              </h2>
              <p className="mt-4 text-lg text-gray-300 max-w-2xl">
                Crafted to Inspire
              </p>
            </div>
            <div className="w-full lg:w-1/2 ">
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src={swp1}
                    alt="Art 1"
                    className="rounded-lg shadow-lg w-96 h-[500px]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={swp1}
                    alt="Art 2"
                    className="rounded-lg shadow-lg"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <p className=" text-center text-gray-400 max-w-2xl text-base">
          At SISUI, we believe every brushstroke tells a story and every canvas
          holds a Universe of Emotions, waiting for someone like you to Pause,
          Look Deeper, and Feel that Spark of Connection. For us.
        </p>
      </div>
    </div>
  );
}

export default GalleryHeroSection;
