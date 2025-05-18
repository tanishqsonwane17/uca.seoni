import React from "react";
import CollegePage from "./CollegePage";
import SocialWall from "./SocialWall";
import Testimonials from "./Testomonal";
import bgvideo from "../assets/uca-video.mp4";

import Navbar from "./Navbar";
import "../index.css";

export default function MedicapsLandingPage() {
  return (
    <div className="min-h-full relative h-screen">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-[100vh] object-cover z-[-1]"
      >
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-0" />

      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <div className="pt-32 flex flex-col md:flex-row items-center px-4 md:px-8 pb-20 gap-10">
        <div className="w-full md:w-1/2 space-y-6 px-2 md:px-[5vw] text-center md:text-left">
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold text-white">
            Enroll to Join the Ranks of Excellence
          </h1>
          <p className="text-white sm:text-2xl md:text-3xl">
            Find Your Study Options at UCA
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {["UNDERGRADUATE", "POSTGRADUATE", "DOCTORAL"].map((label) => (
              <button
                key={label}
                className="border border-red-800 text-blue-200 font-bold px-4 py-2 rounded hover:bg-red-800 hover:text-white transition"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <CollegePage />
      <Testimonials />
      <SocialWall />
    </div>
  );
}
