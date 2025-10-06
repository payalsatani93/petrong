import React, { useState } from "react";



// ✅ Hero Component
function Hero() {
  return (
    <section className="flex flex-col md:flex-row  relative">
      {/* Left Section */}
      <div className="bg-black text-white flex flex-col justify-center p-12 md:w-[180%]" >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Get the next <br /> level developments.
        </h1>
        <p className="mt-4 text-gray-300 max-w-md">
          Every line of code we deliver  is carefully crafted by our in-house
          team of professional developers. While constantly looking for new
          horizons, challenges, and opportunities in web development, we focus
          on these core areas:
        </p>
        <div className="mt-6 flex space-x-4">
          <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600">
            Get a Quote
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
            Schedule a call
          </button>
        </div>
      </div>

      {/* Right Section (Shapes layout) */}
      <div className="relative w-full md:w-1/1 bg-white overflow-hidden flex items-center justify-center">
        {/* Top Right Green Rectangle */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-green-500"></div>

        {/* Bottom Center Green Square */}
        <div className="absolute bottom-0 left-1/100 w-1/2 h-1/2 bg-green-500 rounded-lg"></div>

        {/* Image */}
        <img
          src="public/Image/home1.png"
          alt="Developer working"
          className="relative z-10 w-[50%] rounded-lg object-cover"
        />
      </div>
    </section>
  );
}

// ✅ App Component
export default function App() {
  return (
    <div className="relative">
      <Hero />
    
    </div>
  );
}