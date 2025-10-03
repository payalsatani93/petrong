import React from "react";

export default function Herosection() {
  return (
    <section className="bg-green-50 py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="relative">
          <img
            src="public/Image/about1.png"
            alt="Laptop with code"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - Text */}
        <div>
          <h4 className="text-green-600 font-semibold tracking-wide ">
            ---OUR PORTFOLIO
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
            A glimpse of some of our project and people we’ve fortunate to work
            with
          </h2>
         
        </div>
      </div>
    </section>
  );
}
