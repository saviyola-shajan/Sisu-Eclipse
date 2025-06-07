import React from 'react'
import HeroArtist from '../Components/Artist/HeroArtist'
import OurArtist from '../Components/Artist/OurArtist'
import Footer from '../Components/Footer'

function Artist() {
  return (
    <div>
      <HeroArtist/>
      <OurArtist/>
      {/* <Footer className="bg-gradient-to-b from-[#010f20] to-[#042957]"/> */}
    </div>
  )
}

export default Artist
