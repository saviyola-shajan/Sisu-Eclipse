import React from "react";
import sisiuVideo from "../assets/video/Sisu Slowmotion (1).mp4"
function HeroSection() {
  return (
    <div className=" h-96 lg:h-screen bg-cover bg-center flex items-center justify-center">
      <video
        className="top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
      >
        <source src={sisiuVideo} type="video/mp4" />
      </video>
    </div>
  );
}

export default HeroSection;
