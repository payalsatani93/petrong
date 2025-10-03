import React from "react";

export default function Blog() {
  return (
    <div className="flex flex-col">
      <div className="max-w-6xl mx-auto p-5">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Image */}
          <div className="w-full">
            <div className="w-full aspect-[4/3]">
              <img
                src="/Image/UIUXDesign.png"
                alt="UIUX Design"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <div className="w-full aspect-[4/3]">
              <img
                src="/Image/Enjoyholiday.png"
                alt="Enjoy Holiday"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full text-center lg:text-left flex flex-col justify-center">
            {/* Title with lines */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <div className="w-12 h-[3px] bg-[#4FD1A1]" />
              <h3 className="text-lg font-semibold whitespace-nowrap">
                Mobile Development
              </h3>
              <div className="w-12 h-[3px] bg-[#4FD1A1]" />
            </div>

            {/* Highlighted Text */}
            <p className="text-green-500 text-xl font-medium mb-3">
              How To Design The Perfect Hero Image: Guide, Practical Tips and
              Examples
            </p>

            {/* Description */}
            <p className="text-gray-600">
              Design is an important visual element that revolves in our daily
              lives. We don’t run from it — we utilise and make use of it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
