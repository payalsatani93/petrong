import React from "react";

export default function Blog() {
  return (
    <div className="flex flex-col">
      {/* Section-1 */}
      <div className="max-w-6xl mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Image */}
          <div>
            <div className="w-full">
              <div className="w-full aspect-[4/3]">
                <img
                  src="/Image/UIUXDesign.png"
                  alt="UIUX Design"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
            {/* Content */}
            <div className="w-full text-center lg:text-left flex flex-col justify-center">
              <p className="text-emerald-500 text-xl font-medium mb-3">
                How To Design The Perfect Hero Image: Guide, Practical Tips and
                Examples
              </p>
              <p className="text-gray-600">
                Design is an important visual element that revolves in our daily
                lives. We don’t run from it — we utilise and make use of it.
              </p>
              <button
                className="bg-emerald-500 w-25 p-1 rounded-sm text-white 
                   mx-auto block lg:mx-0 lg:ml-0 mt-2"
              >
                Read More
              </button>
            </div>
          </div>

          {/* Center Image */}
          <div>
            <div className="w-full">
              <div className="w-full aspect-[4/3]">
                <img
                  src="/Image/Enjoyholiday.png"
                  alt="Enjoy Holiday"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
            {/* Content */}
            <div className="w-full text-center lg:text-left flex flex-col justify-center">
              <p className="text-emerald-500 text-xl font-medium mb-3">
                How To Design The Perfect Hero Image: Guide, Practical Tips and
                Examples
              </p>
              <p className="text-gray-600">
                Design is an important visual element that revolves in our daily
                lives. We don’t run from it — we utilise and make use of it.
              </p>
              <button
                className="bg-emerald-500 w-25 p-1 rounded-sm text-white 
                   mx-auto block lg:mx-0 lg:ml-0 mt-2"
              >
                Read More
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="w-full text-center lg:text-left flex flex-col justify-center">
              {/* Title And lines */}
              <div className="flex items-center justify-center lg:justify-start gap-2 ">
                <div className="w-12 h-[3px] bg-[#4FD1A1]" />
                <h3 className="text-lg font-semibold whitespace-nowrap">
                  Mobile Development
                </h3>
                <div className="w-12 h-[3px] bg-[#4FD1A1]" />
              </div>

              <p className="text-emerald-500 text-xl font-medium mb-3">
                How To Design The Perfect Hero Image: Guide, Practical Tips and
                Examples
              </p>

              <p className="text-gray-600">
                Design is an important visual element that revolves in our daily
                lives. We don’t run from it — we utilise and make use of it.
              </p>
              <button
                className="bg-emerald-500 w-25 p-1 rounded-sm text-white 
                   mx-auto block lg:mx-0 lg:ml-0 mt-2"
              >
                Read More
              </button>
            </div>
            {/* Content */}
            <div className="w-full text-center lg:text-left flex flex-col justify-center mt-6">
              <p className="text-emerald-500 text-xl font-medium mb-3">
                How To Design The Perfect Hero Image: Guide, Practical Tips and
                Examples
              </p>
              <p className="text-gray-600">
                Design is an important visual element that revolves in our daily
                lives. We don’t run from it — we utilise and make use of it.
              </p>
              <button
                className="bg-emerald-500 w-25 p-1 rounded-sm text-white 
                   mx-auto block lg:mx-0 lg:ml-0 mt-2"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
