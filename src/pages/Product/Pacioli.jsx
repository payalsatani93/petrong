import React from "react";

export default function Pacioli() {
  return (
    <section className=" bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-5 text-center md:text-left">
          <p className="text-gray-400 text-lg font-medium">01</p>

          <h2 className="text-[36px] sm:text-4xl lg:text-5xl font-bold text-gray-900" style={{ fontFamily: "var(--font-Poppins)" }}>
            Pacioli
          </h2>

          <p className="text-gray-600  font-semibold text-[14px] sm:text-lg" style={{ fontFamily: "var(--font-Montserrat)" }}>
            Pacioli is the flagship product at Petrong Software Solutions — a
            tailored digital lending tool that helps microfinance institutions
            efficiently and quickly onboard customers and handle account
            reconciliation, with financial inclusion as the core motivation.
          </p>

          <p className="text-gray-600  font-semibold text-[14px] sm:text-lg" style={{ fontFamily: "var(--font-Montserrat)" }}>
            Pacioli enhances female customer comfort by offering a service
            specifically designed to meet unique constraints and needs.
          </p>

          <div className="pt-2">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center md:justify-end">
          <img
            src="public/Image/product1.png"
            alt="Laptop on desk"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl rounded-2xl shadow-lg border border-green-100 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
