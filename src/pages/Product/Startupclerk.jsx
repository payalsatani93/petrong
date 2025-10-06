import React from "react";

export default function Startupclerk() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div className="space-y-5 text-center md:text-left">
          <p className="text-gray-400 text-lg font-medium">03</p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Startupclerk
          </h2>

          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            StartupClerk is an account management software designed to help
            small businesses handle all bookkeeping tasks necessary to avoid
            financial crises, gain investor credibility, and ensure smooth
            cashflow management — all without needing an accountant.
          </p>

          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            It gives entrepreneurs the freedom to focus on product development,
            marketing, and other profitable business ventures while maintaining
            precise financial control effortlessly.
          </p>

          <div className="pt-2">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300">
              Read More
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center md:justify-end">
          <img
            src="public/Image/product3.png"
            alt="Startupclerk workspace"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl border border-green-200 shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-center justify-center text-center py-12 px-6 md:px-20 bg-white mt-16 space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Let's build great things together!
        </h2>

        <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl">
          Fill out this form and one of our client success managers will contact
          you within 24 hours. We have notifications set to make sure your
          message is received.
        </p>

        <button className="px-8 py-3 bg-green-500 text-white rounded-md border border-transparent hover:bg-green-400 hover:text-white transition-colors duration-300">
          Contact
        </button>
      </div>
    </section>
  );
}
