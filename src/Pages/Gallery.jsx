import React from 'react'
import GalleryHeroSection from '../Components/Gallery/GalleryHeroSection'
import ArtWorks from '../Components/Home/ArtWorks'
import Footer from '../Components/Footer'

function Gallery() {
  return (
    <div>
      <GalleryHeroSection/>
      <ArtWorks limit={12}/>
      <Footer className="bg-gradient-to-b from-[#7b2c18] to-[#1b0d23]"/>
    </div>
  )
}

export default Gallery
