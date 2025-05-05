import React, { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

function Reflection() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#002244] to-[#7a0202] relative text-white px-4 overflow-hidden">
      <h1 className="absolute top-1/4 left-[50%] transform -translate-x-1/2 text-[12rem] text-white/5 font-semibold select-none tracking-[1.5rem] whitespace-nowrap pointer-events-none z-0">
        REFLECTION
      </h1>
      <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 tracking-[2rem] whitespace-nowrap flex flex-col items-center z-20">
        <h2 className="text-5xl md:text-8xl font-bold text-[#F69005]">
          REFLECTION
        </h2>
        <button
          onClick={() => setOpen(!open)}
          className="mt-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition duration-300"
        >
          {open ? (
            <FaArrowUp className="text-[#F69005] w-6 h-6" />
          ) : (
            <FaArrowDown className="text-[#F69005] w-6 h-6" />
          )}
        </button>
      </div>
      {open && (
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center max-w-xl px-4 text-sm text-gray-300 z-10 font-Dm-sans">
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
