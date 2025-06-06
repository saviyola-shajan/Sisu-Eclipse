import React, { useState } from "react";

const words = [
  {
    word: "Aesthete",
    meaning: " someone with deep sensitivity to the beauty of art or nature ",
  },
  {
    word: "Ailyak",
    meaning:
      " The subtle art of doing everything  calmly and without rushing, whilst enjoying the experience and life in general ",
  },
  {
    word: "Besa",
    meaning:
      " A pledge of honour to be able offer your word as collateral for deepest trust. an oath of loyalty made goodby the moral virtue of its bearer ",
  },
  {
    word: "Elysian",
    meaning: " Beautiful or creative deeply inspired peaceful and perfect ",
  },
  {
    word: "Duende",
    meaning: "The mysterious power of art to deeply move a person ",
  },
  {
    word: "Meraki",
    meaning:
      " To do something with soul, creativity,or love, to put something of  yourself in your work ",
  },
];

export default function EssenceOfWords() {
  const [hoveredWord, setHoveredWord] = useState(words[0]);

  return (
    <div className="h-[80vh] md:min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0f172a] to-[#7b2c18] text-white font-serif px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-10 sm:py-14 md:py-16">
      <div className="text-left mb-12">
        <h1 className="font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 text-center md:text-left text-[#F69005]">
          The Essence of Words
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-normal font-Dm-sans">
          Art is the purest form of human expression, a medium that transcends
          boundaries, cultures, and languages. From delicate brushstrokes on
          canvas to the raw textures of sculpture
        </p>
      </div>

      <div className="flex w-full max-w-7xl justify-between h-[450px] flex-row">
        {/* Left Words */}
        <div className="w-1/2 sm:w-1/3 space-y-4 sm:space-y-6 overflow-y-auto ml-4 md:ml-12">
          {words.map((item) => (
            <div
              key={item.word}
              onMouseEnter={() => setHoveredWord(item)}
              className={`cursor-pointer font-semibold text-lg sm:text-2xl md:text-3xl lg:text-4xl transition duration-200 ${
                hoveredWord.word === item.word
                  ? "text-white font-bold"
                  : "text-gray-400"
              }`}
            >
              {item.word}
            </div>
          ))}
        </div>

        {/* Right Meaning */}
        <div className="w-1/2 sm:w-2/3 mb-24 md:mb-0 flex items-center justify-center text-center md:bg-transparent bg-white/20 px-4 rounded-2xl">
          <p className="text-base sm:text-xl md:text-2xl lg:text-4xl text-[#F69005] font-medium  transition-all duration-300 max-w-xl sm:max-w-2xl px-0 sm:px-4 font-Dm-sans">
            “ {hoveredWord.meaning} ”
          </p>
        </div>
      </div>
    </div>
  );
}
