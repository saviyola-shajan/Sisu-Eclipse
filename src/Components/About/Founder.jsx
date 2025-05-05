import React from "react";
import img from "../../assets/images/image37.png";
function Founder() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#7a0202]  to-[#1b101b] px-6 py-12">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/3">
          <img src={img} alt="Shane Lannon" className="rounded-xl shadow-lg" />
        </div>
        <div className="w-full md:w-2/3 text-white items-center justify-center">
          <h2 className="text-7xl font-normal text-[#F69005] mb-4">
            Founder Voice
          </h2>
          <h3 className="text-3xl font-normal mb-2">Shane Lannon</h3>
          <p className="text-base font-extralight text-justify font-Dm-sans">
            At SSLU we believe every brushstroke tells a Story and every canvas
            holds a Universe of Emotions, waiting for someone like you to Pause,
            Look Deeper, and Feel that Spark of Connection. For us, the most
            meaningful connections happen One-to-One between a piece and its
            Perfect Match. In that moment, art goes beyond its form and becomes
            a personal journey. Each piece in our collection discovers its
            significance when it sees someone who truly grasps its essence. For
            at its core, Art is a Conversation, a subtle bond between the
            Creator and the Observer.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Founder;
