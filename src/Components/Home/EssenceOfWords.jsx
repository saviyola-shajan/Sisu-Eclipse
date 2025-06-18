import React, { useState } from "react";
import sun2 from "../../assets/video/Sun.gif";

const wordMeanings = {
  Aesthete: "someone with deep sensitivity to the beauty of art or nature",
  Elysian: "Beautiful or creative deeply inspired peaceful and perfect",
  Duende: "The mysterious power of art to deeply move a person",
  Meraki:
    "To do something with soul, creativity,or love, to put something of  yourself in your work",
  Besa: "A pledge of honour to be able offer your word as collateral for deepest trust. an oath of loyalty made goodby the moral virtue of its bearer",
  Ailyak:
    "The subtle art of doing everything  calmly and without rushing, whilst enjoying the experience and life in general",
};

export default function EssenceOfWords() {
  const [meaning, setMeaning] = useState(wordMeanings["Aesthete"]);
  const [selectedWord, setSelectedWord] = useState("Aesthete");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0f172a] to-[#7b2c18] text-white font-serif px-6 md:px-10 lg:px-20 xl:px-32 py-10 sm:py-14 md:py-16">
      <div className="text-left mb-12 w-full max-w-7xl">
        <h1 className="font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 text-center md:text-left text-[#F69005]">
          The Essence of Words
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-10 font-normal font-Dm-sans">
          Art is the purest form of human expression, a medium that transcends
          boundaries, cultures, and languages. From delicate brushstrokes on
          canvas to the raw textures of sculpture
        </p>
      </div>

      <div className="relative w-[320px] h-[320px] sm:w-[520px] sm:h-[500px] md:w-[950px] md:h-[750px] my-4 max-w-full">
        {/* Ring Video Background */}
        <img  
          src={sun2}
          alt="glow"
          className="absolute inset-0 w-[110%] h-[110%] object-cover rounded-full pointer-events-none mb-32"
        />

        {/* Inner Text */}
        <div className="absolute inset-0 flex items-center justify-center text-center z-10 mt-12 px-4">
          <p className="text-orange-400 text-[10px] md:text-lg font-Dm-sans max-w-[168px] md:max-w-2xs">
            " {meaning} "
          </p>
        </div>

        {/* Word Buttons Around */}
        <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 z-10">
          <button
            onMouseEnter={() => {
              setMeaning(wordMeanings["Aesthete"]);
              setSelectedWord("Aesthete");
            }}
            className={`bg-white/10 font-bold text-xl md:text-4xl px-2 md:px-4 py-1 md:py-2 rounded-md transition-colors duration-200 ${
              selectedWord === "Aesthete" ? "text-white" : "text-white/50"
            }`}
          >
            Aesthete
          </button>
        </div>

        <div className="absolute top-[10%] sm:top-[25%] right-[-10px] smright-[-30px] z-10">
          <button
            onMouseEnter={() => {
              setMeaning(wordMeanings["Elysian"]);
              setSelectedWord("Elysian");
            }}
            className={`bg-white/10 font-bold text-xl md:text-4xl px-2 md:px-4 py-1 md:py-2 rounded-md transition-colors duration-200 ${
              selectedWord === "Elysian" ? "text-white" : "text-white/50"
            }`}
          >
            Elysian
          </button>
        </div>

        <div className="absolute bottom-[5%] sm:bottom-[25%] right-[-10px] smright-[-30px] z-10">
          <button
            onMouseEnter={() => {
              setMeaning(wordMeanings["Duende"]);
              setSelectedWord("Duende");
            }}
            className={`bg-white/10 font-bold text-xl md:text-4xl px-2 md:px-4 py-1 md:py-2 rounded-md transition-colors duration-200 ${
              selectedWord === "Duende" ? "text-white" : "text-white/50"
            }`}
          >
            Duende
          </button>
        </div>

        <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 z-10 ">
          <button
            onMouseEnter={() => {
              setMeaning(wordMeanings["Meraki"]);
              setSelectedWord("Meraki");
            }}
            className={`bg-white/10 font-bold text-xl md:text-4xl px-2 md:px-4 py-1 md:py-2 rounded-md transition-colors duration-200 ${
              selectedWord === "Meraki" ? "text-white" : "text-white/50"
            }`}
          >
            Meraki
          </button>
        </div>

        <div className="absolute bottom-[5%] sm:bottom-[25%] left-[-10px] sm:left-[-30px] z-10">
          <button
            onMouseEnter={() => {
              setMeaning(wordMeanings["Besa"]);
              setSelectedWord("Besa");
            }}
            className={`bg-white/10 font-bold text-xl md:text-4xl px-2 md:px-4 py-1 md:py-2 rounded-md transition-colors duration-200 ${
              selectedWord === "Besa" ? "text-white" : "text-white/50"
            }`}
          >
            Besa
          </button>
        </div>

        <div className="absolute top-[10%] sm:top-[25%] left-[-10px] sm:left-[-30px] z-10">
          <button
            onMouseEnter={() => {
              setMeaning(wordMeanings["Ailyak"]);
              setSelectedWord("Ailyak");
            }}
            className={`bg-white/10 font-bold text-xl md:text-4xl px-2 md:px-4 py-1 md:py-2 rounded-md transition-colors duration-200 ${
              selectedWord === "Ailyak" ? "text-white" : "text-white/50"
            }`}
          >
            Ailyak
          </button>
        </div>
      </div>
    </div>
  );
}
