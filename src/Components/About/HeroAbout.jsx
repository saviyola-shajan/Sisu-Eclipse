import React from "react";
import Header from "../Header";
import img from "../../assets/images/image36.png";

const HeroAbout = () => {
  return (
    <div className="bg-gradient-to-b from-[#030B26] to-[#002244] text-white min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-8 sm:py-16 text-center md:text-left">
      <div className="absolute top-6 left-0 w-full z-20">
        <Header />
      </div>

      <div className="text-center md:text-left mb-8 sm:mb-12 mt-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F69005] mb-4">
          About
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#ffffff] max-w-4xl tracking-wide font-Dm-sans">
          The Vision Is Not to Create Art for Everyone, but to Honour the Rare
          and Meaningful Moments When One Individual Recognises the Essence of a
          Piece and Claims It as Their Own
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md  mx-auto md:mx-0 h-80 sm:h-[480px]">
          <div className="absolute w-full top-4 sm:top-6 left-4 sm:left-8 h-full border-[#E46104] border z-10 rounded-xl" />
          <img
            src={img}
            alt="About Art"
            className="rounded-xl p-1 w-full h-full object-cover relative z-10"
          />
        </div>

        <div className="space-y-6 px-2 sm:px-0">
          <div className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-Dm-sans tracking-wide text-justify">
            <p className="mb-4">
              At its heart, SISU is about those fleeting, transformative
              moments—a brief yet powerful connection between the buyer and the
              art or artist. Whether it’s an instant spark or a connection that
              lingers over time, it’s about capturing the unspoken magic of that
              recognition: the knowing that a creation resonates with you, that
              it moves you in some way. It’s about being grateful for the marvel
              of beauty someone else has brought into existence, and silently,
              humbly acknowledging that contribution without fanfare.
            </p>

            <p>
              This connection does not demand prolonged reflection or dwelling.
              It can be as simple as feeling enriched for a moment before
              returning to daily life—happy in the knowledge that art, creation,
              and connection have the ability to transport you, even briefly, to
              a place of awe and wonder.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
