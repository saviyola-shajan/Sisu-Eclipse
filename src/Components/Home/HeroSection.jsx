import React from "react";
import sisiuVideo from "../../assets/video/Sisu Slowmotion (1).mp4";
import Header from "../Header";

function HeroSection() {
  return (
    <div className="relative h-60 sm:h-72 md:h-96 lg:h-screen xl:h-screen 2xl:h-screen bg-cover bg-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
      >
        <source src={sisiuVideo} type="video/mp4" />
      </video>
      <div className="absolute top-6 left-0 w-full z-20">
        <Header />
      </div>
    </div>
  );
}

export default HeroSection;
