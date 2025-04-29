import React from "react";
import Header from "../Header";
import contactimg from "../../assets/images/sisuContact.png";
function HeroSection() {
  return (
    <div className="relative flex h-96 lg:h-screen bg-cover bg-center overflow-hidden">
      <div className="absolute top-6 left-0 w-full z-20">
        <Header />
      </div>
      <img
        src={contactimg}
        alt="contactimg"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 z-10 flex justify-center items-center">
        <h1 className="text-white text-9xl font-bold">CONTACT</h1>
      </div>
    </div>
  );
}

export default HeroSection;
