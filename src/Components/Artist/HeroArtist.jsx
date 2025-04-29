import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const slides = [
  {
    image: '/images/artist1.jpg',
    title: 'Crafted to Inspire',
    description:
      'An SJU art balance across brushstroke with a deep and easy sense to relate to dilemmas of humanity, making art feel alive.',
  },
  {
    image: '/images/artist2.jpg',
    title: 'Bold Expression',
    description:
      'From London to Paris to LA, the vision is universal—bold, human, and emotional.',
  },
];

function HeroArtist() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
  return (
    <div className="bg-gradient-to-b from-blue-900 via-blue-700 to-red-900 text-white min-h-screen p-10">
    <div className="max-w-5xl mx-auto">
      <h1 className="text-yellow-400 text-5xl font-semibold mb-4">Artist</h1>
      <p className="text-white text-sm max-w-2xl mb-10">
        Art is the purest form of human expression, a revolution that transcends boundaries, cultures, and languages. From delicate brushstrokes on canvas to the raw sparks of sculpture.
      </p>

      <div className="bg-white text-black p-6 rounded-xl shadow-lg">
        <Swiper
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="md:w-1/2">
                  <h2 className="text-xl font-semibold mb-2">{slide.title}</h2>
                  <p className="text-gray-600">{slide.description}</p>
                </div>
                <div className="md:w-1/2">
                  <img
                    src={slide.image}
                    alt="Artist"
                    className="rounded-lg w-full h-64 object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation */}
          <div className="flex justify-center mt-6 gap-4">
            <button ref={prevRef} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              <FaAngleLeft size={20} />
            </button>
            <button ref={nextRef} className="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              <FaAngleRight size={20} />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  </div>
  )
}

export default HeroArtist;
