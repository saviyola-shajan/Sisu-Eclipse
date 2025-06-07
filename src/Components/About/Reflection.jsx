import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

function Reflection() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#002244] to-[#7a0202] relative text-white px-4 overflow-hidden">
      <h1 className="hidden md:block absolute  left-1/2 transform -translate-x-1/2 text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] text-white/5 font-semibold select-none tracking-[0.5rem] sm:tracking-[1rem] md:tracking-[1.5rem] whitespace-nowrap pointer-events-none z-0">
        REFLECTION
      </h1>

      <div className="absolute top-[20%] md:top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 tracking-[0.3rem] sm:tracking-[1rem] md:tracking-[2rem] whitespace-nowrap flex flex-col items-center z-20">
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold">
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

<AnimatePresence>
  {open && (
    <motion.div
      key="dropdown"
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -60 }}
      transition={{ duration: 1.3 }}
      className="absolute bottom-[20%] md:bottom-8 left-0 w-full flex justify-center z-10"
    >
      <div className="w-full px-4 sm:px-6 md:max-w-[70vw] text-center text-sm sm:text-lg text-gray-300 font-Dm-sans">
        <p>
          SISU values art as an intimate dialogue—between the artist, their
          creation, and the individual who resonates with it. This resonance
          validates the artist’s work, giving it purpose and meaning, while
          offering the collector a reflection of their own emotions, story, or
          vision.
          <br />
          <br />
          In a world often driven by trends and mass appeal, SISU embraces the
          unassuming, the quiet, and the rare. It’s about the power of
          subtlety and the humility of creation. Art does not need to shout;
          it only needs to be seen by the one who truly understands it.
          Through SISU, we connect these moments, fostering a space where
          artists and collectors can find their shared frequency, and where
          the stories behind each work are given the reverence, they deserve.
        </p>
      </div>
    </motion.div>
  )}
</AnimatePresence>


    </div>
  );
}

export default Reflection;
