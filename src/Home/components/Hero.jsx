import React from "react";

function Hero() {
  return (
    <section className="grid md:grid-cols-2">
      {/* Left Section */}
      <div className="bg-black text-white flex flex-col justify-center p-12">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Get the next <br /> level developments.
        </h1>
        <p className="mt-4 text-gray-300 max-w-md">
          Every line of code we deliver is carefully crafted by our in-house
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
      <div className="relative flex items-center justify-center bg-white p-8">
        {/* Green background shape */}
        <div className="absolute top-12 left-6 w-72 h-72 bg-green-500 rounded-lg z-0"></div>
        
        {/* Image */}
        <img
          src="/Image/home1.png" // ✅ use /Image/home1.png instead of public/
          alt="Developer working"
          className="rounded-lg shadow-lg object-cover w-full max-w-md relative z-10"
        />
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div>
      <Hero />
    </div>
  );
}
