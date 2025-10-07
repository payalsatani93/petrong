import React from "react";

export default function AboutUs() {
  return (
    <section className="bg-green-50 py-12 md:py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* ✅ Left Side - Image with Quote Box */}
        <div className="relative flex justify-center">
          <img
            src="/Image/about1.png" // ✅ Correct path
            alt="Laptop with code"
            className="rounded-xl shadow-xl w-full max-w-sm sm:max-w-md lg:max-w-md object-cover"
          />

          {/* ✅ Quote Box (hidden on mobile, visible on md+) */}
          <div className="hidden md:block absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-xl p-5 w-[85%] max-w-sm text-center">
            <p className="text-gray-600 text-sm leading-relaxed">
              We want to build a world where great ideas, products, and
              companies come to fruition quickly whilst achieving the required
              impact. Our work is to facilitate the process.
            </p>
            <p className="mt-3 font-semibold text-gray-800 text-base">
              Rasheed Ogunusii
            </p>
            <p className="text-sm text-gray-500">CTO</p>
          </div>
        </div>

        {/* ✅ Right Side - Text Content */}
        <div className="text-center md:text-left">
          {/* Section Label */}
          <div className="flex items-center justify-center md:justify-start mb-4">
            <span className="w-12 h-1 bg-green-400 rounded mr-3"></span>
            <p className="text-green-500 font-semibold uppercase text-sm sm:text-base md:text-lg tracking-wide">
              Who We Are
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            We combine our experience and passion to develop solutions that
            empower businesses.
          </h2>

          {/* Description */}
          <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </section>
  );
}
