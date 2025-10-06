import React from "react";

export default function Blog() {
  return (
    <div className="bg-white py-10 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
        {/* Left Section */}
        <div className="">
          {/* Heading with line */}
          <div className="flex items-center gap-4 mb-1">
            <h3 className="text-3xl font-semibold">Digital Marketing</h3>
            <div className="flex-1 h-[2px]  bg-[#4FD1A1]" />
          </div>

          {/* Blog Item 1 */}
          <div className="mb-3 text-center lg:text-start">
            <h4 className="text-emerald-500 font-semibold text-2xl">
              <p>
                How To Design The Perfect Hero Image: <br /> Guide, Practical
                Tips and Examples
              </p>
            </h4>
            <p className="text-gray-600 text-md mt-2">
              Design it an important and visual illustration <br />
              that revolve in our daily lives, we dont run <br />
              from it we utilise and make use of it.
            </p>
            <button className="mt-2 bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm">
              Read More
            </button>
          </div>

          {/* Blog Item 2 */}
          <div className="mb-3 text-center lg:text-start">
            <h4 className="text-emerald-500 font-semibold text-2xl">
              <p>
                How To Design The Perfect Hero Image: <br /> Guide, Practical
                Tips and Examples
              </p>
            </h4>
            <p className="text-gray-600 text-md mt-1">
              Design it an important and visual illustration <br />
              that revolve in our daily lives, we dont run <br />
              from it we utilise and make use of it.
            </p>
            <button className="mt-2 bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm">
              Read More
            </button>
          </div>

          {/* Blog Item 3 */}
          <div className="mb-6 text-center lg:text-start">
            <h4 className="text-emerald-500 font-semibold text-2xl">
              <p>
                How To Design The Perfect Hero Image: <br /> Guide, Practical
                Tips and Examples
              </p>
            </h4>
            <p className="text-gray-600 text-md mt-1">
              Design it an important and visual illustration <br />
              that revolve in our daily lives, we dont run <br />
              from it we utilise and make use of it.
            </p>
            <button className="mt-2 bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm">
              Read More
            </button>
          </div>
        </div>

        {/* Right Section */}
        {/* Right Section */}
        <div className="flex flex-col gap-6">
          {/* Responsive image wrapper */}
          <div className="w-full aspect-video">
            <img
              src="/Image/DigitalMarketing.png"
              alt="team discussion"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>

          <div className="text-center lg:text-start">
            <h4 className="text-emerald-500 font-semibold text-2xl">
              <p>Top five digital development in 2022</p>
            </h4>
            <p className="text-gray-600 text-lg mt-2">
              Design it an important and visual illustration that revolve in our
              daily lives, we dont run from it we utilise and make use of it.
            </p>
            <button className="mt-4 bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
