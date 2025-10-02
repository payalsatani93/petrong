
import React from "react";
function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Logo</div>
      <ul className="flex space-x-6 text-sm">
        <li><a href="#about" className="hover:text-green-400">ABOUT</a></li>
        <li><a href="#portfolio" className="hover:text-green-400">PORTFOLIO</a></li>
        <li><a href="#product" className="hover:text-green-400">PRODUCT</a></li>
        <li><a href="#expertise" className="hover:text-green-400">EXPERTISE</a></li>
        <li><a href="#contact" className="hover:text-green-400">CONTACT</a></li>
        <li><a href="#blog" className="hover:text-green-400">BLOG</a></li>
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="grid grid-cols-2">
      {/* Left Section */}
      <div className="bg-black text-white flex flex-col justify-center p-12">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Get the next <br /> level developments.
        </h1>
        <p className="mt-4 text-gray-300 max-w-md">
          Every line of code we deliver is   carefully crafted by our in-house
          team of professional developers. While constantly looking for new
          horizons, challenges, and opportunities in web development, we focus
          on these core areas:
        </p>
        <div className="mt-6 flex space-x-4">
          <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600">
            Get a Quote
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
            Schedule a Call
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex items-center bg-white ">
        {/* Green background shape */}
        <div className="absolute  left-6 w-72 h-72 bg-green-500 rounded-lg z-0"></div>

        {/* Image */}
        <img
          src="/Image/home1.png" // ✅ use /Image/home1.png instead of public/
          alt="Developer working"
          className="rounded-lg shadow-lg object-cover h-50  relative z-10"
        />
      </div>
    </section>
  );
}

import React from 'react'


export default function Hero() {
  return (
    <div>
      <p>he  llo  </p>
    </div>
  )
}
