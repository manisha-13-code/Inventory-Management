import React from 'react'
import { Link } from 'react-router-dom';
import mainLogo from "../../assets/LogoInven.jpg";

const Header = () => {
    return (
      <header className="p-4 bg-white shadow-md flex justify-between">
       <div className='flex items-center'>
       <img className='w-10' src={mainLogo}/>
       <h1 className="text-2xl font-bold">TrackEase</h1>
       </div>
        <div>
        <Link className='px-5 py-2 bg-blue-500 rounded-lg text-white' to='/signup'>Signup</Link>
          <Link className='px-5 py-2 rounded-lg bg-slate-100 ml-3' to='/login'>Login</Link> 
        </div>
      </header>
    );
  };

export default Header
