import React from "react";

export default function AboutUs() {
  return (
    <section className="bg-green-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="relative">
          <img
            src="/Image/about1.png"
            alt="Laptop with code"
            className="rounded-lg shadow-lg"
          />

          {/* Quote Box */}
          <div className="hidden md:block absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 max-w-xs md:max-w-sm lg:max-w-md">
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              We want to build a world where great ideas, products, and
              companies come to fruition quickly whilst achieving the required
              impact. Our work is to facilitate the process.
            </p>
            <p className="mt-3 font-semibold text-gray-800 text-sm md:text-base">
              Rasheed Ogunusii
            </p>
            <p className="text-xs md:text-sm text-gray-500">CTO</p>
          </div>
        </div>

        {/* Right Side - Text */}
        <div>
          <h4 className="text-green-600 font-semibold tracking-wide">
            WHO WE ARE
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
            We combine our experience and passion to develop solutions that
            empower businesses.
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">

            Lorem Ipsum is simply dummy text of the printing and industry. Lorem

            Ipsum has been the industry's standard text ever since the 1500s,
            when an unknown printer took of type and scrambled it to make a type
            specimen book.
          </p>
        </div>
      </div>
    </section>
  );
}
