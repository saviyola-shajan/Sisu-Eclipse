import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

function Reflection() {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-96 lg:min-h-screen bg-gradient-to-b from-[#002244] to-[#7a0202] relative text-white px-4 overflow-hidden">
      <h1 className="hidden md:block absolute top-1/4 left-1/2 transform -translate-x-1/2 text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] text-white/5 font-semibold select-none tracking-[0.5rem] sm:tracking-[1rem] md:tracking-[1.5rem] whitespace-nowrap pointer-events-none z-0">
        REFLECTION
      </h1>

      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 tracking-[0.5rem] sm:tracking-[1rem] md:tracking-[2rem] whitespace-nowrap flex flex-col items-center z-20">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold">
          {"REFLECTION".split("").map((char, index) => (
            <span
              key={index}
              className="wave-letter bg-gradient-to-t from-[#F69005] to-[#A73A00] bg-clip-text text-transparent inline-block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </h2>

        <div className="relative inline-flex items-center justify-center mt-6">
          <span className="pulse-ring"></span>
          <span className="pulse-ring delay-[0.5s]"></span>
          <span className="pulse-ring delay-[1s]"></span>

          <button
            onClick={() => setOpen(!open)}
            className="relative z-10 p-4 rounded-full bg-white/10 hover:bg-white/20 transition duration-300"
          >
            {open ? (
              <FaArrowUp className="text-[#F69005] w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <FaArrowDown className="text-[#F69005] w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl px-2 sm:px-4 text-xs sm:text-sm text-gray-300 z-10 font-Dm-sans">
          <p>
            This is your dropdown content. You can place any reflective message,
            quote, or descriptive text here. It appears when the arrow is
            clicked and hides again when closed.
          </p>
        </div>
      )}
    </div>
  );
}

export default Reflection;
