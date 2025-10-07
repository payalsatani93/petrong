import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-green-50 py-12 px-6 md:py-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* ✅ Left Side - Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src="/Image/about1.png" // ✅ Correct path (no need for "public/")
            alt="Laptop with code"
            className="rounded-xl shadow-xl w-full max-w-md md:max-w-full object-cover"
          />
        </div>

        {/* ✅ Right Side - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
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
      </div>
    </section>
  );
}
