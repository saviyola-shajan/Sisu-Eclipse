import React from 'react'
import vedio from "../../assets/video/HOME FINAL SISU.mp4"
function VedioAbout() {
  return (
    <div className="w-full flex justify-center bg-gradient-to-b from-[#002244] to-[#002244]">
    <div className="h-96 lg:h-screen xl:h-screen 2xl:h-screen bg-cover bg-center overflow-hidden max-w-6xl w-full mx-auto px-4 md:px-0 py-24">
      <video
        className="w-full h-full object-cover rounded-2xl"
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
      >
        <source src={vedio} type="video/mp4" />
      </video>
    </div>
  </div>
  
  )
}

export default VedioAbout