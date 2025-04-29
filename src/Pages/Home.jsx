import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import ExclusiveArts from '../Components/Home/ExclusiveArts'
import ArtWorks from '../Components/Home/ArtWorks'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
      <HeroSection/>
      <ExclusiveArts/>
      <ArtWorks limit={6}/>
      <Footer/>
    </div>
  )
}

export default Home
