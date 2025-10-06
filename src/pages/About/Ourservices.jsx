import React from "react";

export default function Ourservices() {


  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-6xl   md:px-35 text-center md:text-left">
        {/* Section Header */}
        <div className="flex items-center justify-center md:justify-start mb-4">
          <span className="w-12 h-1 bg-green-400 rounded mr-3"></span>
          <p className="text-green-500 font-semibold uppercase text-lg tracking-wide">
            Our Services
          </p>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-snug">
          Methodologies & <br className="hidden md:block" /> Technology We Use
        </h2>

        {/* Description */}
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto md:mx-0">
          We build your product from scratch with top frontend and backend
          frameworks. Our focus is on creating native end-user experiences,
          delivering full performance on both iOS and Android devices.
        </p>
      
      </div>
    </section>
  );
}
