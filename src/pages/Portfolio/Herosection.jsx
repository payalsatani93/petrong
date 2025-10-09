import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-green-50 py-12 px-6 md:py-16 relative overflow-hidden " style={{ fontFamily: "var(--font-Poppins)" }}>
      {/* Top Line Image */}
      <div className="hidden xl:block absolute top-0  xl:w-250  xl:left-65  ">
        <img
          src="public/Image/Vector 42 (2).png"
          alt="Decorative line"
          className="w-full"
        />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* Left Side - Image */}
        <div className="relative flex justify-center md:w-1/2">
          {/* Decorative Dots (Top Left) */}
          <div className="hidden xl:block absolute left-10 top-55 z-0">
            <div className="grid grid-cols-6 gap-2">
              {[...Array(108)].map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 bg-emerald-400 rounded-full opacity-80"
                />
              ))}
            </div>
          </div>

          {/* Main Image */}
          <div className="relative z-10">
            <img
              src="/Image/about1.png"
              alt="Laptop with code"
              className="rounded-2xl w-[95%] md:w-[90%] shadow-lg"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-40" style={{ fontFamily: "var(--font-Poppins)" }}>
          {/* Label */}
          <div className="flex items-center justify-center md:justify-start mb-4">
            <span className="w-12 h-1 bg-emerald-400 rounded mr-3"></span>
            <p className="text-black font-medium uppercase text-[18px] sm:text-base md:text-lg" >
              Our Portfolio
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-[29px] sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 leading-snug">
            A glimpse of some of our projects and people we’ve been fortunate to
            work with
          </h2>
        </div>
      </div>

      {/* Bottom Right Decorative Dots */}
      <div className="hidden lg:block absolute right-10 bottom-10 z-0">
        <div className="grid grid-cols-8 gap-2">
          {[...Array(64)].map((_, i) => (
            <span key={i} className="w-2 h-2 bg-emerald-400 rounded-full" />
          ))}
        </div>
      </div>
    </section>
  );
}
