import React, { useState } from "react";
import { artworks } from "../../Constant/Constants";

function ArtWorks({ limit = 6 }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-16 px-24 h-auto bg-gradient-to-b from-[#0f172a] to-[#7b2c18] text-white relative">
      <h2 className="text-7xl font-medium text-[#F69005] mb-4 font-georgia">ART WORKS</h2>
      <p className="max-w-5xl text-[#ffffff] text-xl font-normal mb-16 font-Dm-sans tracking-wide">
        Art is the purest form of human expression, a medium that transcends
        boundaries, cultures, and languages. From delicate brushstrokes to
        expressive bold new statements of sculpture.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-10 mx-auto">
        {artworks.slice(0, limit).map((art) => (
          <div key={art.id} className="flex flex-col items-center">
            <div
              onClick={() => setSelectedImage(art.image)}
              className="cursor-pointer bg-white/5 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={art.image}
                alt="Art"
                className="w-md h-[70svh] object-cover"
              />
            </div>
            <div className="flex items-center gap-2 mt-4 self-start">
              <img
                src={art.imgAuth}
                alt="Author"
                className="w-8 h-8 rounded-full object-cover"
              />
              <p className="text-sm text-gray-400 ml-2">{art.author}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <button className="text-white px-8 py-2 border-2 border-[#F69005] bg-transparent hover:bg-[#F69005] rounded-full font-semibold transition-all duration-300">
          Contact US
        </button>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()} 
          >
            <img
              src={selectedImage}
              alt="Full View"
              className="w-full max-h-[80vh] object-contain mx-auto rounded-xl"
            />
            <div className="text-center mt-4">
              <button
                onClick={() => setSelectedImage(null)}
                className="px-6 py-2 bg-[#F69005] text-white font-semibold rounded-full hover:bg-[#d77902] transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ArtWorks;
