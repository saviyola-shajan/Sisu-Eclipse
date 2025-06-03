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
    <div className="bg-gradient-to-b from-[#011425] via-[#013461] to-[#AF351D] text-white min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 py-10 sm:py-12 md:py-16">
      <div className="absolute top-6 left-0 w-full z-20">
        <Header />
      </div>
      <div className="max-w-7xl mx-auto mt-24 sm:mt-20 text-center md:text-left">
        <h1 className="text-[#F69005] text-6xl md:text-7xl lg:text-8xl font-normal mb-4">
          Artist
        </h1>
        <p className="text-[#ffffff] text-base sm:text-lg md:text-xl font-normal mb-10 font-Dm-sans tracking-wide">
          Art is the purest form of human expression, a revolution that
          transcends boundaries, cultures, and languages. From delicate
          brushstrokes on canvas to the raw sparks of sculpture.
        </p>

        <div className="bg-white p-6 sm:p-8 md:p-10 h-auto">
  <div className="flex justify-center items-center">
    {/* Swiper: Full Width */}
    <div className="w-full">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1.4}
        // centeredSlides={true}
        loop={true}
        spaceBetween={40}
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
              className="w-full h-64 sm:h-72 md:h-80 lg:h-[70vh] object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
        {/* Custom Navigation */}
        <div className="flex justify-center mt-4 gap-4">
          <button
            ref={prevRef}
            className="bg-gray-300 p-2 sm:p-3 rounded-full"
          >
            <FaArrowLeft size={18} className="text-black" />
          </button>
          <button
            ref={nextRef}
            className="bg-gray-300 p-2 sm:p-3 rounded-full"
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
