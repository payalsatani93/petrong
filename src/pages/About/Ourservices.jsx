import React from "react";

export default function Ourservices() {


  return (
    <section className="py-9 bg-white relative font-Poppins">
      <div className="max-w-6xl   md:px-35 text-center md:text-left">
         {/* Section Header  */}
        <div className="flex items-center justify-center md:justify-start mb-4">
          <span className="w-12 h-1 bg-green-400 rounded mr-3"></span>
          <p className="text-black font-medium uppercase text-[18px] ">
            Our Services
          </p>
        </div>

        {/* Title  */}
        <h2 className="text-[40px] md:text-5xl font-regular text-gray-800 ">
          Methodologies & <br className="hidden md:block" /> Technology We Use
        </h2>

        {/*  Description  */}
        <p className="text-gray-600 mt-6 max-w-2xl mx-auto md:mx-0 text-[18px] font-regular">
          We build your product from scratch with top frontend and backend
          frameworks. Our focus is on creating native end-user experiences,
          delivering full performance on both iOS and Android devices.
        </p>

      </div>
    </section>
  );
}