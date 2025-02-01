import React from 'react'
import Header from "../components/Landing/Header";
import HeroSection from "../components/Landing/Herosection"
import Features from "../components/Landing/Features"
import Footer from '../components/Landing/Footer';
import AboutUs from '../components/Landing/AboutUs';

const Home = () => {
  return (
    <div>
       <Header />
      <HeroSection />
      <Features />
      <AboutUs />
      <Footer/>
    </div>
  )
}

export default Home
