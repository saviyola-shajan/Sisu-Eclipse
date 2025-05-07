import React from "react";
import img from "../../assets/images/image36.png";

const artistImages = [
  { src: img, alt: "Artist 0" }, 
  { src: img, alt: "Artist 0" }, 
  { src: img, alt: "Artist 0" }, 
  { src: img, alt: "Artist 0" }, 
  { src: img, alt: "Artist 0" }, 
  { src: img, alt: "Artist 0" }, 
  { src: img, alt: "Artist 0" }, 
  { src: img, alt: "Artist 0" }, 
];

function OurArtist() {
  return (
    <div className="min-h-screen px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 py-20 bg-gradient-to-b from-[#AF351D] via-[#1c1c39] to-[#010f20] text-white flex flex-col">
      <div className="w-full max-w-6xl mx-auto text-center mb-12 px-4 sm:px-8 md:px-12">
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-[#F69005] mb-6 text-center md:text-left">
          Our Artist
        </h2>
        <p className="text-base sm:text-lg text-[#ffffff] font-light md:text-left font-Dm-sans tracking-wide text-justify">
          At its essence, S8UL is about those fleeting, transformative moments—a
          brief yet powerful connection between the player and the art or
          artist. Whether it's an instant spark or a connection that lingers
          over time, it’s about capturing the unspoken magic of that
          recognition: the knowing that a creator resonates with you, that it
          moves you in some way. It’s about being grateful for the marvel of
          beauty someone else has brought into existence, and silently, humbly
          acknowledging that contribution without fanfare.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 md:gap-12 lg:gap-16">
        {artistImages.map((image, idx) => (
          <img
            key={idx}
            src={image.src}
            alt={image.alt}
            className={`w-44 md:w-52 lg:w-60 h-56 md:h-64 lg:h-68 object-cover rounded-tr-2xl rounded-bl-2xl shadow-lg transition-transform duration-300 hover:scale-105 ${
              idx % 2 === 0 ? "mt-0 sm:mt-16 md:mt-20 lg:mt-24" : "mb-0 sm:mb-16 md:mb-20 lg:mb-24"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default OurArtist;
