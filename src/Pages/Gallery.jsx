import React from 'react'
import GalleryHeroSection from '../Components/Gallery/GalleryHeroSection'
import Footer from '../Components/Footer'
import ArtWorks from '../Components/Gallery/ArtWorks'

function Gallery() {
  return (
    <div>
      <GalleryHeroSection/>
      <ArtWorks/>
      <Footer className="bg-gradient-to-b from-[#7b2c18] to-[#1b0d23]"/>
    </div>
  )
}

export default Gallery
