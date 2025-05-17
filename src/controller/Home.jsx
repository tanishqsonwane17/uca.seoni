 import React, { useState } from "react";
import { Link } from "react-router-dom";
import CollegePage from "./CollegePage";
import SocialWall from "./SocialWall";
import Testimonials from "./Testomonal";
import bgvideo from "../assets/uca-video.mp4";


import "../index.css";

export default function MedicapsLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-full  relative h-screen   ">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-[100vh]    object-cover z-[-1]"
      >
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-10 flex justify-between items-center px-6 py-4 bg-white/30 backdrop-blur-md shadow text-white">
        <div className="text-xl md:text-2xl font-bold">
          <span className="Uca">UNIVERSAL</span>{" "}
          <span className="Uca text-blue-900">COMPUTER ACADEMY</span>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
       <ul
  className={`md:flex gap-6 font-medium transition-all duration-300 ${
    menuOpen
      ? 'absolute top-full left-0 bg-black w-full flex flex-col text-center text-white py-4'
      : 'hidden md:flex'
  }`}
>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/Gallary">Gallary</Link></li>
        </ul>
      </nav>

      {/* Main Section */}
      <div className="pt-32 flex flex-col md:flex-row items-center px-4 md:px-8 pb-20 gap-10">
        {/* Left */}
        <div className="w-full md:w-1/2 space-y-6 px-2 md:px-[5vw] text-center md:text-left">
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold text-white">
            Enroll to Join the Ranks of Excellence
          </h1>
          <p className="text-white sm:text-2xl md:text-3xl ">Find Your Study Options at UCA</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {["UNDERGRADUATE", "POSTGRADUATE", "DOCTORAL"].map((label) => (
              <button
                key={label}
                className="border border-red-800 text-blue-200  font-bold px-4 py-2 rounded hover:bg-red-800 hover:text-white transition"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Right */}
     
      </div>

      {/* Other Sections */}
      <CollegePage />
      <Testimonials />
      <SocialWall />
    </div>
  );
}