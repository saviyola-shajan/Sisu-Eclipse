import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";
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
    <div className="bg-gradient-to-b from-[#011425] via-[#013461] to-[#AF351D] text-white min-h-screen px-24 py-16">
      <div className="absolute top-6 left-0 w-full z-20">
        <Header />
      </div>
      <div className="max-w-5xl mx-auto mt-20">
        <h1 className="text-[#F69005] text-8xl font-normal mb-4">Artist</h1>
        <p className="text-[#ffffff] text-xl font-normal mb-10 font-Dm-sans tracking-wide">
          Art is the purest form of human expression, a revolution that
          transcends boundaries, cultures, and languages. From delicate
          brushstrokes on canvas to the raw sparks of sculpture.
        </p>

        <div className="bg-white p-10 h-auto ">
          <div className="flex flex-col md:flex-row  gap-6 justify-center items-center">
            {/* Left Side: Text */}
            <div className="md:w-1/3 w-full">
              <h2 className="text-4xl text-[#121212]  font-semibold mb-2">Crafted to <br/><span className="text-6xl font-semibold">Inspire</span></h2>
              <p className="text-[#000000] font-normal text-base mt-4 font-Dm-sans">
                An SJU art balance across brushstroke with a deep and easy sense
                to relate to dilemmas of humanity, making art feel alive.
              </p>
            </div>

            {/* Right Side: Swiper */}
            <div className="md:w-2/3 w-full">
              <Swiper
                modules={[Navigation]}
                slidesPerView={1.2}
                centeredSlides={true}
                loop={true}
                spaceBetween={20}
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
                      className=" w-full h-80 object-cover"
                    />
                  </SwiperSlide>
                ))}
                {/* Custom Navigation */}
                <div className="flex justify-center mt-4 gap-4">
                  <button
                    ref={prevRef}
                    className="bg-gray-300 p-2 rounded-full"
                  >
                    <FaArrowLeft size={18} className="text-black"/>
                  </button>
                  <button
                    ref={nextRef}
                    className="bg-gray-300 p-2 rounded-full"
                  >
                    <FaArrowRight size={18} className="text-black"/>
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
