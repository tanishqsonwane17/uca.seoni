import React from "react";
import { Link } from 'react-router-dom';
import CollegePage from "./CollegePage";
import SocialWall from "./SocialWall";
import Testimonials from "./Testomonal";
import bgvideo from '../assets/uca-video.mp4';
import '../index.css'
export default function MedicapsLandingPage() {
  return (
    <div className="min-h-screen   ">
   <video
  autoPlay
  muted
  loop
  className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
>
  <source src={bgvideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>
<div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
<nav className="fixed top-0 left-0 w-full z-10 flex justify-between items-center px-8 py-4 bg-white/30 backdrop-blur-md shadow text-white">
        <div className="text-2xl font-bold ">
          <span id="U" className="Uca">UNIVERSAL</span>{' '}
          <span className="Uca text-blue-900 ">
            COMPUTER ACADEMY
          </span>

        </div>
        <ul className="hidden md:flex gap-6 text-white font-medium hover:cursor-pointer" >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/Gallary">Gallary</Link></li>
        </ul>
        <div className="flex gap-3">
          <Link to='/signup'><button className="bg-blue-100 text-blue-900 px-4 py-1 rounded hover:cursor-pointer">signup </button></Link>
          <Link to='/login'><button className="bg-blue-600 text-white px-4 py-1 rounded hover:cursor-pointer">Login </button></Link>
        </div>
      </nav>

      {/* Main Section */}

      <div className="pt-32 flex flex-col md:flex-row items-center px-8 pb-20 gap-10 h-[48vw] ">

        <div className="md:w-1/2 space-y-6  px-[5vw]">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
  Enroll to Join the Ranks of Excellence
</h1>
<p className="text-white">Find Your Study Options at UCA</p>

          <div className="flex gap-4 flex-wrap">
            <button className="border border-red-800 text-red-800 px-4 py-2 rounded hover:cursor-pointer">UNDERGRADUATE</button>
            <button className="border border-red-800 text-red-800 px-4 py-2 rounded hover:cursor-pointer">POSTGRADUATE</button>
            <button className="border border-red-800 text-red-800 px-4 py-2 rounded hover:cursor-pointer">DOCTORAL</button>
          </div>
        </div>

        <div className="md:w-1/2 relative">
          <img
            src=""
            alt=""
            className="rounded-[100px_0px_100px_0px] shadow-lg"
          />

        </div>
      </div>


      <CollegePage/>
      <Testimonials/>
      <SocialWall/>
    

    </div>
  );
}