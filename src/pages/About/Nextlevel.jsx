import React from "react";

export default function Nextlevel() {
  return (
    <section className="w-full bg-green-50 flex justify-center py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        {/* Text Section */}
        <div className="md:max-w-xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 leading-snug">
            Do you have a next level-idea?
          </h2>
          <p className="mt-3 text-base sm:text-lg md:text-xl text-gray-500">
            Reach out and we can create magic together
          </p>
        </div>

        {/* Button Section */}
        <div>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 mt-6 md:mt-0 rounded-full shadow-md transition-all duration-300">
            WORK WITH US
          </button>
        </div>
      </div>
    </section>
  );
}
