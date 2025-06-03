import React from 'react'
import HeroAbout from '../Components/About/HeroAbout'
import Founder from '../Components/About/Founder'
import Reflection from '../Components/About/Reflection'
import VedioAbout from '../Components/About/VedioAbout'

function About() {
  return (
    <div>
     <HeroAbout/>
     <VedioAbout/>
     <Reflection/>
     <Founder/>
    </div>
  )
}

export default About
