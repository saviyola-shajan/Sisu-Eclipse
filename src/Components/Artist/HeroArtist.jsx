import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Header from "../Header";
import img1 from "../../assets/images/artist1.png";
import img2 from "../../assets/images/artist1.png";
import img3 from "../../assets/images/artist1.png";
import img4 from "../../assets/images/artist1.png";

const slides = [
  { image: img1 },
  { image: img2 },
  { image: img3 },
  { image: img4 },
];

function HeroArtist() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="bg-gradient-to-b from-[#011425] via-[#013461] to-[#AF351D] text-white md:min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 py-10 sm:py-12 md:py-16">
      {/* Header */}
      <div className="absolute top-6 left-0 w-full z-20">
        <Header />
      </div>

      <div className="max-w-7xl mx-auto mt-16 sm:mt-20 text-center md:text-left">
        {/* Title */}
        <h1 className="text-[#F69005] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-4">
          Featured Artists
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl font-normal mb-10 font-Dm-sans tracking-wide">
         “ The artist translates silence into something you can see “
        </p>  

        {/* Swiper Section */}
        <div className="bg-white p-4 sm:p-6 md:p-8">
          <div className="flex justify-center items-center">
            <div className="w-full">
              <Swiper
                modules={[Navigation]}
                loop={true}
                spaceBetween={20}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  480: { slidesPerView: 1 },
                  640: { slidesPerView: 1.1 },
                  768: { slidesPerView: 1.2 },
                  1024: { slidesPerView: 1.3 },
                  1280: { slidesPerView: 1.4 },
                  1536: { slidesPerView: 1.4 },
                }}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={slide.image}
                      alt={`Artist ${index + 1}`}
                      className="w-full h-60 sm:h-72 md:h-80 lg:h-[70vh] object-cover "
                    />
                  </SwiperSlide>
                ))}

                {/* Navigation */}
                <div className="flex justify-center mt-4 gap-4">
                  <button
                    ref={prevRef}
                    className="bg-gray-300 hover:bg-gray-400 p-2 sm:p-3 rounded-full transition"
                  >
                    <FaArrowLeft size={18} className="text-black" />
                  </button>
                  <button
                    ref={nextRef}
                    className="bg-gray-300 hover:bg-gray-400 p-2 sm:p-3 rounded-full transition"
                  >
                    <FaArrowRight size={18} className="text-black" />
                  </button>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroArtist;
