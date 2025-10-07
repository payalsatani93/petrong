import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="bg-black">
      {/* Web Development line-section */}
      <div className=" flex items-center justify-center p-6">
        <div className="flex flex-col lg:flex-row items-center gap-4 w-full max-w-5xl">
          {/* Title */}
          <h3 className="text-lg text-white">Web Development</h3>

          {/* Line*/}
          <div className="flex-1 h-[3px] bg-[#4FD1A1] hidden md:block" />

          {/* Button */}
          <button className="bg-emerald-500 px-10 py-3 rounded-xl text-white  sm:w-auto">
            See more articles
          </button>
        </div>
      </div>

      {/* Image-Section and content  */}
      <div className="max-w-6xl mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Image-1 */}
          <div className="flex flex-col ">
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
            <div className="w-full text-center lg:text-left flex flex-col justify-center mt-5">
              <p className="text-emerald-500 text-xl font-medium mb-3">
                How To Design The Perfect Hero Image: Guide, Practical Tips and
                Examples
              </p>
              <p className="text-white mb-2">
                Design is an important visual element that revolves in our daily
                lives. We don’t run from it — we utilise and make use of it.
              </p>
              <Link
                to="/blog-single"
                className="bg-emerald-500 w-25 p-1 rounded-sm text-white 
                   mx-auto block lg:mx-0 lg:ml-0 text-center"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Image-2 */}
          <div>
            <div className="w-full">
              <div className="w-full aspect-[4/3]">
                <img
                  src="/Image/Enjoyholiday.png"
                  alt="UIUX Design"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
            {/* Content */}
            <div className="w-full text-center lg:text-left flex flex-col justify-center mt-3">
              <p className="text-emerald-500 text-xl font-medium mb-3">
                How To Design The Perfect Hero Image: Guide, Practical Tips and
                Examples
              </p>
              <p className="text-white mb-2">
                Design is an important visual element that revolves in our daily
                lives. We don’t run from it — we utilise and make use of it.
              </p>
              <Link
                to="/Enjoy-holiday"
                className="bg-emerald-500 w-25 p-1 rounded-sm text-white 
                   mx-auto block lg:mx-0 lg:ml-0 text-center"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Image-3 */}
          <div>
            <div className="w-full">
              <div className="w-full aspect-[4/3]">
                <img
                  src="/Image/Enjoyholiday.png"
                  alt="UIUX Design"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
            {/* Content */}
            <div className="w-full text-center lg:text-left flex flex-col justify-center mt-3">
              <p className="text-emerald-500 text-xl font-medium mb-3">
                How To Design The Perfect Hero Image: Guide, Practical Tips and
                Examples
              </p>
              <p className="text-white mb-2">
                Design is an important visual element that revolves in our daily
                lives. We don’t run from it — we utilise and make use of it.
              </p>
              <Link
                to="/design-effect"
                className="bg-emerald-500 w-25 p-1 rounded-sm text-white 
                   mx-auto block lg:mx-0 lg:ml-0 text-center"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
