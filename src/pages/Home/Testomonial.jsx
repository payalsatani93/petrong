import React from "react";

function Testimonial() {
  return (
    <section className="bg-blue-50 flex flex-col md:flex-row items-center  justify-around  px-6 py-16 md:px-16">
      {/* Left Text Section */}
      <div className="text-black max-w-md text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start mb-4">
          <span className="w-12 h-1 bg-green-400 rounded mr-3"></span>
          <p className=" font-semibold uppercase text-lg tracking-wide">
            TESTIMONIALS
          </p>
        </div>
        <p className="text-lg mb-8 font-semibold">
          See how our clients feel about us.
        </p>
      </div>

      {/* Right Card Section */}
      <div className="relative w-full max-w-sm md:max-w-md">
        {/* Shadow Layer */}
        <div className="absolute -bottom-5 left-5 w-full h-full bg-gray-300 rounded-2xl shadow-xl"></div>

        {/* Card */}
        <div className="relative bg-white rounded-2xl p-8 shadow-2xl  flex flex-col  z-10">
          <img
            src="/Image/JoneDeo-CEO.png"
            alt="John Doe"
            className="w-15 h-15 object-cover rounded-full mb-4 border-4 border-white shadow-md"
          />
          <p className="text-gray-700 mb-4 leading-relaxed">
            Working with the PETRONG team has been a huge success! They're good
            people who care deeply about our business!
          </p>
          <div>
            <p className="font-semibold text-gray-900">John Doe</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between mt-1">
            <p className="text-black text-sm mb-1 sm:mb-0">CEO</p>
            <p className="font-semibold">Leonard Technologies</p>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 hidden md:flex flex-col gap-2">
            <button className="p-2 rounded-full border bg-white hover:bg-emerald-500 hover:text-white transition">
              ▲
            </button>
            <button className="p-2 rounded-full border bg-white hover:bg-emerald-500 hover:text-white transition">
              ▼
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
