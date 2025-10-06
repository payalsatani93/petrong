import React from "react";

export default function Producthero() {
  return (
    <section className="relative overflow-hidden bg-green-50">
      {/* Decorative Curved Line (SVG) */}
      <svg
        className="absolute top-0 left-0 w-full h-40 text-green-200"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          d="M0,160 C240,240 480,80 720,160 C960,240 1200,80 1440,160"
        />
      </svg>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Dedicated product for you
        </h2>
        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Our product is crafted from looking at the problems people face each
          day and providing a solution to them — from conducting surveys to
          turning feedback into useful products. We focus on what people share
          and how they react, to design solutions that truly work.
        </p>
      </div>
      {/* Slanted Divider
      <div className="bg-white rotate-[-2deg] mt-[-40px] h-40 w-full relative z-10"></div> */}

      {/* Second Section */}
      <div className="bg-white text-center py-20">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
          Why you should choose <br className="md:hidden" /> our product
        </h3>
      </div>

     
    </section>
  );
}
