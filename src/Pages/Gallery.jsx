import React from 'react'
import GalleryHeroSection from '../Components/Gallery/GalleryHeroSection'
import ArtWorks from '../Components/Home/ArtWorks'
import Footer from '../Components/Footer'

function Gallery() {
  return (
    <div>
      <GalleryHeroSection/>
      <ArtWorks limit={12}/>
      <Footer className="bg-gradient-to-r from-[#09061a] to-[#541D1D]"/>
    </div>
  )
}

export default Gallery
