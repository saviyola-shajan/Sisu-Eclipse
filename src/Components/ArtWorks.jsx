import React from "react";
import { artworks } from "../Constant/Constants";

function ArtWorks() {
  return (
    <section className="py-16 px-24 h-auto bg-gradient-to-b from-[#0f172a] to-[#7b2c18] text-white">
      <h2 className="text-7xl font-medium text-[#F69005] mb-4">ART WORKS</h2>
      <p className="max-w-5xl text-[#ffffff] text-xl font-medium mb-16">
        Art is the purest form of human expression, a medium that transcends
        boundaries, cultures, and languages. From delicate brushstrokes to
        expressive bold new statements of sculpture.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {artworks.map((art) => (
          <div key={art.id} className="flex flex-col items-center">
            <div className="bg-white/5 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src={art.image}
                alt="Art"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="flex items-center gap-2 mt-4 self-start">
              <img
                src="/path/to/profile.jpg"
                alt="Author"
                className="w-8 h-8 rounded-full object-cover"
              />
              <p className="text-sm text-gray-400 ml-2 ">{art.author}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className=" text-white px-8 py-2 border-2 border-[#F69005] rounded-full font-semibold transition-all duration-300">
          Contact US
        </button>
      </div>
    </section>
  );
}

export default ArtWorks;
