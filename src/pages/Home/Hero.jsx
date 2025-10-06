import React from "react";

export default function Hero() {
  return (
    <section className="mb-33">
      <div className="flex lg:h-180 flex-col lg:flex-row ">
        {/* Left Section */}
        <div className="bg-black text-white flex flex-col justify-center p-8 w-full lg:w-2/2">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            Get the next <br /> level developments.
          </h1>

          <p className="mt-4 text-gray-300 max-w-md text-base lg:text-lg">
            Every line of code we deliver is carefully crafted by our in-house
            team of professional developers. While constantly looking for new
            horizons, challenges, and opportunities in web development, we focus
            on these core areas:
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <button className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all duration-300">
              Get a Quote
            </button>

            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300">
              Schedule a Call
            </button>
          </div>
        </div>

        {/* Right Section (only shows on lg+) */}
        <div className="hidden lg:flex bg-white lg:w-110 items-center justify-center relative">
          {/* Green cross shape */}
          <div className="absolute lg:w-90 md:h-110 bg-green-500 top-0 right-0"></div>
          <div className="absolute lg:w-75 md:h-100 bg-green-500 top-95 right-60 rounded-lg"></div>

          {/* Optional Hero Image */}
          <img
            src="/Image/home1.png"
            alt="Developer working"
            className="relative lg:w-1/1 object-cover rounded-2xl shadow-xl right-30"
          />
        </div>
      </div>
    </section>
  );
}
