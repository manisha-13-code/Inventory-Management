import React from 'react'
import aboutUs from "../../assets/aboutUsImg.jpg";

const AboutUs = () => {
  return (
    <section>
      <div className='flex justify-between items-center p-20'>
      <div className="w-72 h-48 bg-gray-300 flex justify-center items-center rounded border border-gray-400">
        <img className='w-80 scale-125' src={aboutUs}/>
      </div>
      <div>
      <h2 className="text-2xl font-bold mb-3 text-center">About Us</h2>
      <p className="text-lg text-gray-700 text-center mb-5">
        Welcome to our company. We are dedicated to providing the best<br/> services to our clients. Our team works tirelessly to bring<br/> you innovative solutions and exceptional customer service.
      </p>
      </div>
      </div>
    </section>

  )
}

export default AboutUs
