import React from 'react'
import HeroSection from '../Components/Contact/HeroSection'
import ConnectWithUs from '../Components/Contact/ConnectWithUs'
import Footer from '../Components/Footer';

function Contact() {
  return (
    <div>
      <HeroSection/>
      <ConnectWithUs/>
      <Footer className='bg-gradient-to-r from-[#0e1631] to-[#7B2C18]'/>
    </div>
  )
}

export default Contact;
