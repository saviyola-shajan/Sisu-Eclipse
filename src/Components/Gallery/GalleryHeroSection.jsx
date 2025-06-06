import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Header from "../Header";
import swp1 from "../../assets/images/Rectangle 5.png";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

function GalleryHeroSection() {
  const images = [
    { src: swp1, alt: "Art 1" },
    { src: swp1, alt: "Art 2" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="absolute top-4 sm:top-6 left-0 w-full z-20">
        <Header />
      </div>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#1a0914] via-[#140b1d] to-[#0f172a]">
        <h1 className="absolute top-28 sm:top-32 left-1/2 transform -translate-x-1/2 text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-bold text-white/5 uppercase tracking-widest z-0 whitespace-nowrap">
          Art Works
        </h1>

        <div className="relative z-10 flex flex-col items-center mt-32 sm:mt-36 px-4 sm:px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 sm:gap-10">
            <div className="text-center lg:text-left w-full lg:w-1/2">
              <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#F69005]">
                Exclusive <br />
                Art
              </h2>
              <p className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-5xl text-[#FFFFFF] font-normal">
                Crafted to Inspire
              </p>
              <p className="text-center md:text-left text-[#FFFFFF] font-normal mt-6 sm:mt-8 text-base sm:text-lg md:text-xl font-Dm-sans tracking-wide">
                AAt SISUI, we believe every brushstroke tells a story and every
                canvas holds a Universe of Emotions, waiting for someone like
                you to Pause, Look Deeper, and Feel that Spark of Connection.
              </p>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center relative mt-10 lg:mt-0">
              <button className="prev-btn absolute left-4 sm:left-8 md:left-12 lg:left-16 xl:left-20 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 sm:p-3 rounded-full text-[#121212] text-lg sm:text-xl">
                <FaAngleLeft />
              </button>
              <button className="next-btn absolute right-4 sm:right-8 md:right-12 lg:right-16 xl:right-20 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 sm:p-3 rounded-full text-[#121212] text-lg sm:text-xl">
                <FaAngleRight />
              </button>

              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".next-btn",
                  prevEl: ".prev-btn",
                }}
                loop={true}
                className="mySwiper w-full"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="rounded-lg shadow-lg w-[280px] sm:w-[340px] md:w-[400px] lg:w-[450px] xl:w-[500px] h-[360px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover mx-auto"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryHeroSection;
