import React from "react";

function Testimonial() {
  return (
    <section className="bg-blue-50 flex flex-col md:flex-row gap-10 justify-center px-8 py-16">
      {/* Left Side Text */}
      <div className="text-black max-w-md">
        <h1 className="text-4xl font-bold mb-4">TESTIMONIALS</h1>
        <h6 className="text-lg mb-8">See how our clients feel about us.</h6>
        <h1 className="text-2xl font-semibold text-right">ABOUT PACIOLI</h1>
      </div>

      {/* Right Side Card */}
      <div className="relative max-w-sm w-full">
        {/* Gray shadow under card */}
        <div className="absolute -bottom-4 left-4 w-full h-full bg-gray-300 rounded-xl shadow-2xl"></div>

        {/* Card */}
        <div className="relative bg-white rounded-xl p-6 shadow-3xl flex flex-col items-center text-center ">
          <img
            src="/Image/JoneDeo-CEO.png"
            alt="John Doe"
            className="w-15  rounded-full  mb-4 border-4 border-white"
          />
          <p className="text-gray-700 mb-4 ">
            Working with the PETRONG team has been a huge success! They're good
            people who care deeply about our business!
          </p>
          <span className="font-semibold text-gray-900">John Doe</span>
          <div className="flex  text-gray-500 text-sm mt-2 gap-10">
            <span>CEO</span>
            <span>Leonard Technologies</span>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
