import React from 'react'
import mainPage from "../../assets/mainPageImg.jpg";

const HeroSection = () => {
    return (
        <section className="text-center">
            <div className='flex justify-between items-center p-10'>
                <div>
                    <h1 className="text-4xl font-bold">Track Smarter, Grow Faster.</h1>
                    <p className="text-gray-600 mt-3">
                        At Inventory Flow, we deliver smart solutions to simplify inventory,<br/> cut costs,
                        and boost efficiency, empowering businesses to maximize profitability.
                    </p>

                    <button className="bg-blue-500 text-white px-5 py-2 rounded-lg mt-5">Get Started</button>
                    <button className=" text-blue-600 px-5 py-2 rounded-lg mt-5 border ml-3">Learn More</button>
                </div>
                <div className='p-10'>
                    <img className='w-100 scale-100' src={mainPage} />
                </div>
            </div>
            
        </section>
    );
};
export default HeroSection;
