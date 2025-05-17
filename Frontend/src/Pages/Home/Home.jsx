import React, { useState } from 'react'
import "./Home.css"
import Header from '../../Components/Header/Header'
import LogoMarque from '../../Components/LogoMarque/LogoMarque'
import SectionService from '../../Components/SectionService/SectionService'
import WhyChoose from '../../Components/WhyChoose/WhyChoose'
import IntroSection from '../../Components/IntroSection/IntroSection'
import TestimonialSlider from '../../Components/TestimonialSlider/TestimonialSlider'
import HowItWorks from '../../Components/HowItWorks/HowItWorks'
import Footer from '../../Components/Footer/Footer'

const Home = ({ setShowLogin, setIsSignup }) => {

  return (
    <>

    <div className="background-animation">
        <div className="circle c1"></div>
        <div className="circle c2"></div>
        <div className="circle c3"></div>
        <div className="circle c4"></div>
      </div>

    <div className="home-content">
        <Header setShowLogin={setShowLogin} setIsSignup={setIsSignup}/>
        <IntroSection />
        <SectionService />
        <WhyChoose />
        <LogoMarque />
        <TestimonialSlider />
        <HowItWorks />
        <Footer />
    </div>

     
      </>
  )
}

export default Home