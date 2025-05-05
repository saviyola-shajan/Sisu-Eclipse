import React from "react";
import Header from "../Header";
import img from "../../assets/images/image36.png"
const HeroAbout = () => {
  return (
    <div className="bg-gradient-to-b from-[#030B26] to-[#002244] text-white min-h-screen px-24 py-16">
      <div className="absolute top-6 left-0 w-full z-20">
        <Header />
      </div>
      <div className="text-left mb-12 mt-20">
        <h2 className="text-7xl font-normal text-[#F69005] mb-2">About</h2>
        <p className="text-lg text-[#ffffff] max-w-4xl">
          Art is the purest form of human expression, a medium that transcends
          boundaries, cultures, and languages. From delicate brushstrokes on
          canvas to the raw textures of sculpture.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src={img}
            alt="About Art"
            className="rounded-xl border border-yellow-500 p-1 w-96 h-96"
          />
        </div>
        <div className="space-y-6 ">
          <p className="text-sm flex text-gray-300 leading-relaxed items-center justify-center">
            At its essence, SBU is about those fleeting, transformative
            moments—a brief yet powerful connection between the buyer and the
            art or artist. Whether it's an instant spark or a connection that
            lingers over time, it's about capturing the unspoken magic of that
            recognition: the knowing that a creation resonates with you, that it
            moves you in some way. It's about being grateful for the marvel of
            beauty someone else has brought into existence, and silently, humbly
            acknowledging that contribution without fanfare.
          </p>
          <button className="border border-white px-6 py-2 rounded-full text-sm hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
