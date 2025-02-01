import React from 'react'
import { Link } from 'react-router-dom';
import dashboard from "../../assets/DashboardImg.jpg";
import Analytics from "../../assets/analytics.jpg";
import Integration from "../../assets/Integration.jpg";

const Features = () => {
  return (
    <section>
      <div className='flex justify-between items-center p-10'>
        <div className='p-10'>
          <h2 className="text-3xl font-bold text-center">Simplify Your Inventory</h2>
          <p className="text-gray-600 mt-3">
            Monitor your stock levels, sales, and orders in real-time<br /> to avoid shortages or overstocking.
          </p>
        </div>
        <div className='p-20'>
          <img className='rounded-lg w-80 shadow-md scale-150' src={dashboard} />
        </div>
      </div>
      <div className='flex justify-between items-center p-10'>
        <div className='p-20'>
          <img className='rounded-lg w-80 shadow-md scale-150' src={Analytics} />
        </div>
        <div className='p-10'>
          <h2 className="text-3xl font-bold text-center">Analytics and Reporting</h2>
          <p className="text-gray-600 mt-3">
            Gain actionable insights with detailed
            reports on <br />inventory performance and
            trends.
          </p>
        </div>
      </div>
      <div className='flex justify-between items-center p-10'>
        <div className='p-10'>
          <h2 className="text-3xl font-bold text-center">Seamless Integrations</h2>
          <p className="text-gray-600 mt-3">
            Connect effortlessly with your favourite
            platform like<br/> ERP systems, E-commerce
            tools, and more.
          </p>
        </div>
        <div className='p-20'>
          <img className='rounded-lg w-80 shadow-md scale-150' src={Integration} />
        </div>
      </div>
    </section>
  );
};
export default Features;
