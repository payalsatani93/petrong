import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // For mobile menu
  const [showChat, setShowChat] = useState(false); // For chat box visibility

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-slate-950 p-2 shadow-md   w-full ">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img src="/Image/Logo.png" alt="logo" className="h-10" />

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 p-4 text-white">
            <li><a href="/">HOME</a></li>
            <li><a href="/About">ABOUT</a></li>
            <li><a href="/Portfolio">PORTFOLIO</a></li>
            <li><a href="/Product">PRODUCT</a></li>
            <li><a href="/Expertise">EXPERTISE</a></li>
            <li><a href="/Contact">CONTACT</a></li>
            <li><a href="/Blog">BLOG</a></li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <ul className="md:hidden mt-4 space-y-3 text-white bg-slate-800 p-4 rounded-lg">
            <li><a href="/">HOME</a></li>
            <li><a href="/About">ABOUT</a></li>
            <li><a href="/Portfolio">PORTFOLIO</a></li>
            <li><a href="/Product">PRODUCT</a></li>
            <li><a href="/Expertise">EXPERTISE</a></li>
            <li><a href="/Contact">CONTACT</a></li>
            <li><a href="/Blog">BLOG</a></li>
          </ul>
        )}
      </nav>
    </div>
  );
}
