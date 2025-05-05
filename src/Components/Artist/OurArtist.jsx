import React from "react";
import img from "../../assets/images/image36.png";
const artistImages = [
  { src: img, alt: "Artist 0" }, 
  { src: img, alt: "Artist 0" }, 
  { src: img, alt: "Artist 0" }, 
  { src: img, alt: "Artist 0" }, 

];
function OurArtist() {
  return (
    <div className="min-h-screen px-24 py-20 bg-gradient-to-b from-[#1b0e1a] via-[#1c1c39] to-[#0f1b2b] text-white flex flex-col">
      <div className="max-w-4xl text-center mb-12 px-16">
        <h2 className="text-8xl font-normal text-[#F69005] mb-6 text-left">
          Our Artist
        </h2>
        <p className="text-lg text-[#ffffff] font-light text-left">
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
      <div className="flex flex-wrap justify-center gap-10">
        {artistImages.map((image, idx) => (
          <img
            key={idx}
            src={image.src}
            alt={image.alt}
            className={`w-60 h-68 object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105 ${
              idx % 2 === 0 ? "mt-24" : "mb-24"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default OurArtist;
