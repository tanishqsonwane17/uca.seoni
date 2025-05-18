// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-10 flex justify-between items-center px-6 py-4 bg-white/30 backdrop-blur-md shadow text-black">
      <div className="text-xl md:text-2xl font-bold">
        <span className="Uca">UNIVERSAL</span>{" "}
        <span className="Uca text-blue-900">COMPUTER ACADEMY</span>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            className="w-6 h-6 text-black"
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
            ? "absolute top-full left-0 bg-blue-50  w-full flex flex-col text-center text-black py-4"
            : "hidden md:flex"
        }`}
      >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/Gallary">Gallary</Link></li>
      </ul>
    </nav>
  );
}
