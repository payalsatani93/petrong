import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-green-50 py-12 px-6 md:py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* ✅ Left Side - Image */}
        <div className="relative flex justify-center">
          {/* Decorative Dots */}
          <div className="hidden md:hidden xl:block absolute -left-7 xl:top-51 lg:top-54  z-10">
            <div className="grid grid-cols-6 gap-2">
              {[...Array(108)].map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 bg-[#00D285] rounded-full opacity-80"
                />
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="public/Image/about1.png"
              alt="Laptop with code"
              className="rounded-2xl  w-[95%] md:w-[90%] relative z-20"
            />

            
          </div>
        </div>

        {/* ✅ Right Side - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-50">
          {/* Section Label */}
          <div className="flex items-center justify-center md:justify-start mb-4">
            <span className="w-12 h-1 bg-green-400 rounded mr-3"></span>
            <p className="text-green-500 font-semibold uppercase text-sm sm:text-base md:text-lg">
              Our Portfolio
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            A glimpse of some of our projects and people we’ve been fortunate to
            work with
          </h2>
        </div>
        <div className="absolute hidden lg:block lg:right-30 lg:bottom-15 xl:right-30 xl:bottom-15">
          <div className="grid grid-cols-8 gap-2">
            {Array.from({ length: 64 }).map((_, i) => (
              <span
                key={i}
                className="w-2 h-2 bg-green-400 rounded-full"
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}