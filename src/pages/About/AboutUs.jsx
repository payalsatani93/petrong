import React from "react";
import AboutImage from "/Image/about1.png"; // Import correctly for React

export default function AboutUs() {
  return (
    <div className="font-Poppins">
      {/* ✅ GREEN BG SECTION */}
      <section className="relative bg-green-50 py-20 md:py-28 overflow-hidden z-0">
        <div className="max-w-7xl mx-auto px-7 sm:px-10 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-14 items-center relative z-10">
          {/* Left Side - Image */}
          <div className="relative flex justify-center">
            {/* Decorative Dots */}
            <div className="hidden md:block absolute left-5 xl:top-54 lg:top-54  z-10">
              <div className="grid grid-cols-6 gap-2">
                {[...Array(108)].map((_, i) => (
                  <span
                    key={i}
                    className="w-2 h-2 bg-[#00D285] rounded-full opacity-80"
                  />
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <img
                src={AboutImage}
                alt="Laptop with code"
                className="rounded-2xl  w-[95%] md:w-[90%] relative z-20"
              />

              {/* Quote Box */}
              <div className="hidden md:block absolute -bottom-10 left-1/2 leading-6 transform -translate-x-1/2 bg-white shadow-lg rounded-xl p-5 w-[85%] max-w-sm text-center z-30">
                <p className="text-gray-600 text-[14px] text-start  ">
                  We want to build a world where great ideas, products, and
                  companies come to fruition quickly whilst achieving the
                  required impact. Our work is to facilitate the process.
                </p>
                <p className="mt-3 font-regular text-[15px] text-start">
                  Rasheed Ogunusii
                </p>
                <p className="text-[12px] text-start mt-1 font-regular ">CTO</p>
              </div>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="text-center md:text-left " style={{ fontFamily: "var(--font-Poppins)" }}>
            <div className="flex items-center justify-center md:justify-start mb-4">
              <span className="w-12 h-1 bg-green-400 rounded mr-3"></span>
              <p className="text-black font-semibold uppercase text-[18px] sm:text-base md:text-lg ">
                Who We Are
              </p>
            </div>

            <h2 className="text-[30px] sm:text-3xl md:text-4xl font-semibold text-gray-900 ">
              We combine our experience and passion to develop solutions that
              empower businesses.
            </h2>

            <p className="text-black mt-4 text-[19px] sm:text-base md:text-lg font-medium leading-9 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ WHITE BG SECTION remains unchanged */}
       <div className="relative">
        <section className="bg-white py-20 md:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-14 items-center relative z-10">
            {/* Left Side - Text */}
            <div className="text-center md:text-left order-2 md:order-1">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <span className="w-12 h-[2px] bg-green-400 rounded mr-3"></span>
                <p className="text-black font-semibold uppercase text-[16px] sm:text-[18px]">
                  Our Services
                </p>
              </div>

              <h2 className="text-[40px] sm:text-[36px] md:text-[44px] font-medium text-gray-900 leading-tight">
                Methodologies & <br className="hidden md:block" /> Technology We
                Use
              </h2>

              <p className="text-black mt-3 max-w-xl mx-auto md:mx-0 text-[18px] sm:text-[18px] ">
                We build your product from scratch with top frontend and <br/>backend
                frameworks. Our focus is on native end-user <br/> experiences with
                full performance on both iOS and Android.
              </p>
            </div>
          </div>

          {/* Dots */}
          <div className="absolute hidden lg:block lg:right-30 lg:bottom-115 xl:right-30 xl:bottom-108">
            <div className="grid grid-cols-8 gap-2">
              {Array.from({ length: 64 }).map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 bg-green-400 rounded-full"
                ></span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
